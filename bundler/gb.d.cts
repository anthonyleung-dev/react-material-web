// Types for `react-material-web/labs/gb/bundler`.

/** Matches `import x from './a.css' with { type: 'css' }`. Global regex. */
export declare const CSS_MODULE_IMPORT: RegExp

/** Matches `import x from './a.cssresult.js'`. Global regex. */
export declare const CSSRESULT_DEFAULT_IMPORT: RegExp

export declare class GbBundlerError extends Error {
    readonly code: 'INVALID_ID' | 'INVALID_SOURCE'
    readonly functionName: string
    readonly inputs: Record<string, unknown>
    constructor(code: GbBundlerError['code'], message: string, functionName: string, inputs: Record<string, unknown>)
}

/** Tell whether a module id is an `@material/web/labs/gb` JS module. */
export declare function isGbModule(id: string): boolean

/** Rewrite every gb style import (`.css` module script or default `.cssresult.js` import) to the named `styles` CSSResult. */
export declare function rewriteGbCssImports(source: string): string

/** Vite, Rollup and Rolldown plugin. */
export declare function materialGbVite(): {
    name: string
    enforce: 'pre'
    transform(code: string, id: string): { code: string; map: null } | null
}

/** webpack 5 / Rspack `module.rules` entry. */
export declare function materialGbWebpackRule(): { test: RegExp; loader: string }

/** Next.js `turbopack.rules` entries. */
export declare function materialGbTurbopackRules(): {
    '*.js': { condition: { path: RegExp }; loaders: string[] }
}
