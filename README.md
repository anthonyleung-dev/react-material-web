# React Material Web Components

[![npm version](https://img.shields.io/npm/v/react-material-web.svg)](https://www.npmjs.com/package/react-material-web)
[![npm downloads](https://img.shields.io/npm/dm/react-material-web.svg)](https://www.npmjs.com/package/react-material-web)
[![CI](https://github.com/anthonyleung-dev/react-material-web/actions/workflows/ci.yml/badge.svg)](https://github.com/anthonyleung-dev/react-material-web/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/react-material-web.svg)](LICENSE)

- npm: [react-material-web](https://www.npmjs.com/package/react-material-web)
- Source: [anthonyleung-dev/react-material-web](https://github.com/anthonyleung-dev/react-material-web)
- Changelog: [CHANGELOG.md](CHANGELOG.md)

This library provides a set of React components styled with Material Design, leveraging the capabilities of `@material/web` and `@lit/react`.

## Installation

To install Material Web React, you can use npm or yarn. Run one of the following commands in your project directory:

```bash
npm install react-material-web
```

or

```bash
yarn add react-material-web
```

## Usage

Here's a quick example to get you started. After installing, you can import and use Material Components like any other React component.

We default to using the `@fontsource/roboto` and `material-symbols` in styles, if you want to use them, you can import them in your project:
Add styles to your project:
```tsx
import 'react-material-web/styles'
```

Or you can use the components without default styles.

Then, you can use the components like this:

```tsx
import React from 'react';
import { MdFilledButton } from 'react-material-web';

function Example() {
  return (
    <div>
      <MdFilledButton>Click me</MdFilledButton>
    </div>
  );
}
```

For more detailed documentation on each component and its API, please refer to [Material Components Web](https://github.com/material-components/material-web).

## Storybook

You can also check out our Storybook to see all the components in action. To run the Storybook, use the following command:

```bash
npm run storybook
```

or

[Storybook](https://react-material-web.netlify.app)

## Available Components

### Base
- ✅ Button
- ✅ FAB
- ✅ Icon
- ✅ Icon button
- ✅ Checkbox
- ✅ Chips
- ✅ Dialog
- ✅ Divider
- ✅ Elevation
- ✅ Focus ring
- ✅ List
- ✅ Menu
- ✅ Progress indicators
- ✅ Radio
- ✅ Ripple
- ✅ Select
- ✅ Slider
- ✅ Switch
- ✅ Tabs
- ✅ Text field

### Labs 🚧
> WARNING ⚠️ This folder contains experimental features that are not recommended for production.
- ✅ Badge
- ✅ Card
- ✅ Segmented button
- ✅ Navigation bar

### Labs: expressive components 🚧

> Only using the components above? Skip this section. The package root needs no new setup.

> WARNING ⚠️ These components come from `@material/web/labs/gb`, added in `@material/web` 2.5. They are experimental. Their API can change in a minor release.

They have their own entry point. The expressive Badge and Card differ from the Labs Badge and Card above.

```tsx
import { MdGbButton, MdGbIcon } from 'react-material-web/labs/gb'
```

- ✅ Badge (`MdGbBadge`)
- ✅ Button (`MdGbButton`)
- ✅ Card (`MdGbCard`)
- ✅ Checkbox (`MdGbCheckbox`)
- ✅ Divider (`MdGbDivider`)
- ✅ FAB (`MdGbFab`)
- ✅ Icon (`MdGbIcon`)
- ✅ Icon button (`MdGbIconButton`)
- ✅ List (`MdGbList`, `MdGbListItem`)
- ✅ Menu (`MdGbMenu`, `MdGbMenuGroup`, `MdGbMenuItem`)
- ✅ Radio (`MdGbRadio`)
- ✅ Split button (`MdGbSplitButton`)
- ✅ Switch (`MdGbSwitch`)

#### Required setup

1. **Load the M3 system stylesheet once.** The expressive components read their color, shape, type and motion tokens from it.

    ```tsx
    import '@material/web/labs/gb/styles/m3.css'
    ```

    It uses `light-dark()` colors, so it follows the user's color scheme. With pnpm, add `@material/web` as a direct dependency so this import resolves.

2. **Add the bundler rule.** Upstream loads its styles as CSS module scripts. Most bundlers cannot load them. The rule rewrites each style import to the `.cssresult.js` file next to it. Get the rule from `react-material-web/labs/gb/bundler`. This entry is for bundler config files only. Do not import it in app code.

    **Vite 8**

    ```js
    // vite.config.js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import { materialGbVite } from 'react-material-web/labs/gb/bundler'

    export default defineConfig({
        plugins: [materialGbVite(), react()],
        // The dev dependency optimizer has its own plugin list.
        optimizeDeps: { rolldownOptions: { plugins: [materialGbVite()] } },
        // Only for SSR builds and Vitest: bundle these packages so the plugin runs on them.
        ssr: { noExternal: ['react-material-web', '@material/web'] },
    })
    ```

    On Vite 7, replace the `optimizeDeps` line with `optimizeDeps: { exclude: ['react-material-web', '@material/web'] }`. Vite 7 pre-bundles with esbuild, which does not run this plugin.

    **webpack 5**

    ```js
    // webpack.config.js
    const { materialGbWebpackRule } = require('react-material-web/labs/gb/bundler')

    module.exports = {
        // ...
        module: {
            rules: [
                // ...your rules
                materialGbWebpackRule(),
            ],
        },
    }
    ```

    **Next.js 15.5 and 16**

    Next.js 16 uses Turbopack by default; the `webpack` key covers `next build --webpack`. Next.js 15.5 uses webpack by default; the `turbopack` key covers `--turbopack`. Next.js 15.2 and older ignore the `turbopack` key, so Turbopack builds fail there.

    ```js
    // next.config.mjs
    import { materialGbTurbopackRules, materialGbWebpackRule } from 'react-material-web/labs/gb/bundler'

    export default {
        turbopack: { rules: materialGbTurbopackRules() },
        webpack: (config) => {
            config.module.rules.push(materialGbWebpackRule())
            return config
        },
    }
    ```

    Without the rule, you see one of these errors:

    | Bundler | Symptom |
    | --- | --- |
    | Vite | `does not provide an export named 'default'` for a `.css` file in dev, or `"default" is not exported by ...css` at build time |
    | Vitest | `Unknown file extension ".css"` |
    | webpack, with a CSS loader rule | The build passes. The components render empty. The browser console shows `Cannot read properties of undefined (reading 'styleSheet')` |
    | webpack, without a CSS loader rule | `Module parse failed: Unexpected character '@'` in a gb `.css` file |
    | Next.js (Turbopack) | `non-ecmascript placeable asset ... has no ECMAScript exports` |

3. **Load an icon font for `MdGbIcon`.** It uses the font named by the `--md-icon-font` custom property. This library already depends on [`material-symbols`](https://github.com/marella/material-symbols):

    ```tsx
    import 'material-symbols/outlined.css'
    ```

    ```css
    :root {
        --md-icon-font: 'Material Symbols Outlined';
    }
    ```

    `import 'react-material-web/styles'` loads all `material-symbols` fonts too.

A first component after these steps:

```tsx
import '@material/web/labs/gb/styles/m3.css'
import 'material-symbols/outlined.css'
import { MdGbButton, MdGbIcon } from 'react-material-web/labs/gb'

export function Save() {
    return (
        <MdGbButton color="filled" size="md">
            <MdGbIcon>save</MdGbIcon>
            Save
        </MdGbButton>
    )
}
```

The menu is a native popover. Open it from a button that points at the menu `id`. On React 19, use the `popoverTarget` prop:

```tsx
<>
    <button popoverTarget="menu">Open</button>
    <MdGbMenu id="menu">
        <MdGbMenuItem>Item</MdGbMenuItem>
    </MdGbMenu>
</>
```

React 18 has no `popoverTarget` prop. Pass the HTML attribute instead: `<button {...{ popovertarget: 'menu' }}>Open</button>`.

In jsdom (for example Vitest), form-associated components need an `ElementInternals` polyfill such as `element-internals-polyfill`. This applies to the stable components too.

Tested with Vite 7 and 8, Vitest 5 with jsdom, webpack 5, Next.js 15.5 and 16, and React 18 and 19.

## Core Dependencies

Our library is built upon the solid foundation of Material Design and modern web technologies, including:

- **[@material/web](https://github.com/material-components/material-web):** For Material Design components.
- **[@lit/react](https://github.com/lit/lit):** For creating Lit-based components within React.
- **[@fontsource/roboto](https://github.com/fontsource/font-files/tree/main/fonts/google/roboto):** The default Material Design font.
- **[material-symbols](https://github.com/marella/material-symbols):** For Material Design icons and symbols.


## Releasing

GitHub Actions publishes to npm. Each release has npm provenance.

1. Set `version` in `package.json` and add the entry to `CHANGELOG.md`. Merge to `main`.
2. Tag that commit with the same version, without a `v`, and push the tag:

   ```bash
   git tag 2.5.0
   git push origin 2.5.0
   ```

3. The `Publish` workflow runs the tests and the builds, checks that the tag equals the `package.json` version, and publishes.
   A prerelease version such as `2.6.0-beta.1` goes to the `next` dist-tag.

The workflow uses npm trusted publishing (OIDC), so the repo stores no npm token.

## License

Distributed under the MIT License. See `LICENSE` for more information.
