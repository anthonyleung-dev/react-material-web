# React Material Web Components

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

Add styles to your project:
```tsx
import 'react-material-web/styles'
```

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
- ✅ Card
- ✅ Segmented button
- ✅ Navigation bar

## Core Dependencies

Our library is built upon the solid foundation of Material Design and modern web technologies, including:

- **[@material/web](https://github.com/material-components/material-web):** For Material Design components.
- **[@lit/react](https://github.com/lit/lit):** For creating Lit-based components within React.
- **[@fontsource/roboto](https://github.com/fontsource/font-files/tree/main/fonts/google/roboto):** The default Material Design font.
- **[material-symbols](https://github.com/marella/material-symbols):** For Material Design icons and symbols.


## License

Distributed under the MIT License. See `LICENSE` for more information.
