'use strict'

// webpack / Turbopack loader: rewrites the CSS module script imports of an `@material/web/labs/gb` module.
const { rewriteGbCssImports } = require('./gb.cjs')

/** Purpose: loader entry point; `source` is the module text. */
module.exports = function materialGbLoader(source) {
    return rewriteGbCssImports(source)
}
