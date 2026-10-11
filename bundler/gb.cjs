'use strict'

// Bundler helpers for `react-material-web/labs/gb`.
//
// `@material/web/labs/gb` modules load their styles as CSS module scripts:
//     import buttonStyles from './button.css' with { type: 'css' }
// Most bundlers cannot load that. Upstream ships a `.cssresult.js` file next to every such `.css`
// file. Its named `styles` export is a Lit CSSResult, which also works where `adoptedStyleSheets`
// is missing (jsdom, happy-dom); its default export is `undefined` there. Every helper below calls
// the one rewrite function, `rewriteGbCssImports`, so the rule lives in one place.

const path = require('path')

const GB_MODULE = /@material[\\/]web[\\/]labs[\\/]gb[\\/].*\.js$/
const CSS_MODULE_IMPORT =
    /\bimport\s+([A-Za-z_$][\w$]*)\s+from\s*(['"])([^'"]+)\.css\2\s*with\s*\{\s*type\s*:\s*(['"])css\4\s*\}/g
const CSSRESULT_DEFAULT_IMPORT = /\bimport\s+([A-Za-z_$][\w$]*)\s+from\s*(['"])([^'"]+\.cssresult\.js)\2/g
const LOADER = path.join(__dirname, 'gb-loader.cjs')

/** Structured error for the bundler helpers. */
class GbBundlerError extends Error {
    constructor(code, message, functionName, inputs) {
        super(`[react-material-web/labs/gb] ${functionName}: ${message}`)
        this.name = 'GbBundlerError'
        this.code = code
        this.functionName = functionName
        this.inputs = inputs
    }
}

/** Purpose: tell whether a module id (path, maybe with a query) is an `@material/web/labs/gb` JS module. */
function isGbModule(id) {
    if (typeof id !== 'string') {
        throw new GbBundlerError('INVALID_ID', 'the module id must be a string', 'isGbModule', { id })
    }
    return GB_MODULE.test(id.split('?')[0])
}

/**
 * Purpose: make every gb style import load the named Lit CSSResult.
 * - `import x from './a.css' with { type: 'css' }` becomes `import { styles as x } from './a.cssresult.js'`.
 * - `import x from './a.cssresult.js'` (the icon button already does this) becomes the same named import.
 * Other forms are left as they are; the tests fail if upstream starts to use one.
 */
function rewriteGbCssImports(source) {
    if (typeof source !== 'string') {
        throw new GbBundlerError('INVALID_SOURCE', 'the module source must be a string', 'rewriteGbCssImports', {
            sourceType: typeof source,
        })
    }
    return source
        .replace(CSS_MODULE_IMPORT, 'import { styles as $1 } from $2$3.cssresult.js$2')
        .replace(CSSRESULT_DEFAULT_IMPORT, 'import { styles as $1 } from $2$3$2')
}

/** Purpose: Vite, Rollup and Rolldown plugin. Use it in `plugins` and, on Vite 8, in `optimizeDeps.rolldownOptions.plugins`. */
function materialGbVite() {
    return {
        name: 'react-material-web:gb-css',
        enforce: 'pre',
        transform(code, id) {
            if (!isGbModule(id)) return null
            const rewritten = rewriteGbCssImports(code)
            return rewritten === code ? null : { code: rewritten, map: null }
        },
    }
}

/** Purpose: webpack 5 (and Rspack) `module.rules` entry. */
function materialGbWebpackRule() {
    return { test: GB_MODULE, loader: LOADER }
}

/** Purpose: Next.js `turbopack.rules` entries. */
function materialGbTurbopackRules() {
    return { '*.js': { condition: { path: GB_MODULE }, loaders: [LOADER] } }
}

module.exports = {
    CSS_MODULE_IMPORT,
    CSSRESULT_DEFAULT_IMPORT,
    GbBundlerError,
    isGbModule,
    rewriteGbCssImports,
    materialGbVite,
    materialGbWebpackRule,
    materialGbTurbopackRules,
}
