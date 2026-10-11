'use strict'

// Tests for the `react-material-web/labs/gb` bundler helpers. Run with `npm test`.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const gb = require('./gb.cjs')
const loader = require('./gb-loader.cjs')

const GB_ROOT = path.dirname(require.resolve('@material/web/labs/gb/components/button/button-element.js'))
const GB_DIR = path.resolve(GB_ROOT, '..', '..')

/** Purpose: list every `.js` file under a directory. */
function listJs(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) return listJs(full)
        return entry.name.endsWith('.js') ? [full] : []
    })
}

/** Purpose: find any CSS import attribute left in code (static, dynamic, `assert`, trailing comma). */
const LEFTOVER_CSS_IMPORT = /type\s*:\s*['"]css['"]/

/** Purpose: drop comments so a check only sees code. */
function stripComments(source) {
    return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '').replace(/\s\/\/ .*$/gm, '')
}

test('rewrites the upstream import form and drops the import attribute', () => {
    const input = "import buttonStyles from './button.css' with { type: 'css' }; // github-only"
    assert.equal(
        gb.rewriteGbCssImports(input),
        "import { styles as buttonStyles } from './button.cssresult.js'; // github-only",
    )
})

test('rewrites minified and double-quoted forms', () => {
    assert.equal(
        gb.rewriteGbCssImports('import a from"../x/y.css"with{type:"css"}'),
        'import { styles as a } from "../x/y.cssresult.js"',
    )
})

test('rewrites a default .cssresult.js import to the named styles export', () => {
    assert.equal(
        gb.rewriteGbCssImports("import iconButtonStyles from './icon-button.cssresult.js';"),
        "import { styles as iconButtonStyles } from './icon-button.cssresult.js';",
    )
    const named = "import { styles as s } from './s.cssresult.js'"
    assert.equal(gb.rewriteGbCssImports(named), named)
})

test('leaves plain CSS imports and other import attributes alone', () => {
    const input = "import './global.css'\nimport data from './d.json' with { type: 'json' }\nimport s from './s.css'"
    assert.equal(gb.rewriteGbCssImports(input), input)
})

test('does not join mismatched quotes', () => {
    const input = `import a from './x.css" with { type: 'css' }`
    assert.equal(gb.rewriteGbCssImports(input), input)
})

test('unsupported forms stay as they are, and the leftover check sees every one of them', () => {
    const unsupported = [
        "import './side-effect.css' with { type: 'css' }",
        "const s = await import('./dynamic.css', { with: { type: 'css' } })",
        "export { default } from './re-export.css' with { type: 'css' }",
        "import a from './assert.css' assert { type: 'css' }",
        "import a from './comma.css' with { type: 'css', }",
    ]
    for (const input of unsupported) {
        assert.equal(gb.rewriteGbCssImports(input), input)
        assert.match(input, LEFTOVER_CSS_IMPORT)
    }
})

test('isGbModule matches npm, pnpm and Windows paths, with or without a query', () => {
    assert.ok(gb.isGbModule('/app/node_modules/@material/web/labs/gb/components/button/button-element.js'))
    assert.ok(gb.isGbModule('/app/node_modules/.pnpm/@material+web@2.5.0/node_modules/@material/web/labs/gb/styles/icon/icon-element.js?v=1'))
    assert.ok(gb.isGbModule('C:\\app\\node_modules\\@material\\web\\labs\\gb\\components\\fab\\fab-element.js'))
    assert.ok(!gb.isGbModule('/app/node_modules/@material/web/button/filled-button.js'))
    assert.ok(!gb.isGbModule('/app/node_modules/@material/web/labs/gb/styles/m3.css'))
})

test('invalid input throws a structured error', () => {
    assert.throws(() => gb.rewriteGbCssImports(undefined), (error) => {
        assert.ok(error instanceof gb.GbBundlerError)
        assert.equal(error.code, 'INVALID_SOURCE')
        assert.equal(error.functionName, 'rewriteGbCssImports')
        assert.deepEqual(error.inputs, { sourceType: 'undefined' })
        return true
    })
    assert.throws(() => gb.isGbModule(42), { code: 'INVALID_ID' })
})

test('adapters all use the same rule and the shipped loader', () => {
    const rule = gb.materialGbWebpackRule()
    const turbo = gb.materialGbTurbopackRules()['*.js']
    assert.equal(rule.loader, require.resolve('./gb-loader.cjs'))
    assert.deepEqual(turbo.loaders, [rule.loader])
    assert.equal(String(turbo.condition.path), String(rule.test))
    const plugin = gb.materialGbVite()
    const code = "import s from './s.css' with { type: 'css' }"
    const expected = "import { styles as s } from './s.cssresult.js'"
    assert.equal(plugin.transform(code, '/x/@material/web/labs/gb/a.js').code, expected)
    assert.equal(plugin.transform(code, '/x/src/a.js'), null)
    assert.equal(loader(code), expected)
})

test('integration: every real @material/web/labs/gb module is fully rewritten to files that exist', () => {
    let rewrites = 0
    for (const file of listJs(GB_DIR)) {
        const source = fs.readFileSync(file, 'utf8')
        const output = gb.rewriteGbCssImports(source)
        const code = stripComments(output)
        assert.doesNotMatch(code, LEFTOVER_CSS_IMPORT, `left a CSS import in ${file}`)
        assert.doesNotMatch(code, new RegExp(gb.CSSRESULT_DEFAULT_IMPORT.source), `left a default import in ${file}`)
        for (const [, target] of code.matchAll(/\{ styles as [\w$]+ \} from\s*['"]([^'"]+\.cssresult\.js)['"]/g)) {
            const resolved = path.resolve(path.dirname(file), target)
            assert.ok(fs.existsSync(resolved), `${file} points at missing ${target}`)
            assert.match(fs.readFileSync(resolved, 'utf8'), /^export const styles = /m, `${target} has no named styles export`)
        }
        const count = (text) => {
            const code = stripComments(text)
            return (code.match(gb.CSS_MODULE_IMPORT) || []).length + (code.match(gb.CSSRESULT_DEFAULT_IMPORT) || []).length
        }
        rewrites += count(source) - count(output)
    }
    // @material/web 2.5.0 ships 32 CSS module script imports and 3 default `.cssresult.js` imports.
    // A different count means upstream changed the layout.
    assert.equal(rewrites, 35)
})
