# React Material Web Components Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

-   Fixed the `repository` URL in `package.json` and added `homepage` and `bugs`.
-   GitHub Actions now runs the tests and builds on every pull request, and publishes to npm with provenance when a version tag is pushed.

## [2.5.0] - 2026-10-10

### Added

-   Experimental `MdGb*` components from `@material/web/labs/gb`: Badge, Button, Card, Checkbox, Divider, Fab,
    Icon, IconButton, List, ListItem, Menu, MenuGroup, MenuItem, Radio, SplitButton and Switch.
-   The `react-material-web/labs/gb` entry point for them. They need a bundler rule; stable components need no new setup. See the README.
-   `react-material-web/labs/gb/bundler`. It holds the Vite, webpack and Next.js (Turbopack) rules.

### Changed

-   Updated `@material/web` from `2.2.0` to `2.5.0`.
-   Documented the `download` prop that `@material/web` 2.3 added to link buttons, icon buttons and assist chips.

## [2.2.1] - 2024-10-08

### Fixed

-   Update the `@lit/react` to `1.0.6`

## [2.2.0] - 2024-10-02

### Added

-   Added `Badge` component.

### Changed

-   Updated the `@material/web` package to `2.2.0`

## [2.0.0] - 2024-08-13

### Changed

-   Updated the `@material/web` package to `2.0.0`
-   Removed the CSS import in `src/index.tsx`, Now the CSS import is optional.

## [1.0.10] - 2024-05-31

### Changed

-   Updated the `@material/web` package to `1.5.0`

### Fixed

-   Added missing elements to some components([#6](https://github.com/anthonyleung-dev/react-material-web/pull/6) Thanks to [zZHorizonZz](https://github.com/zZHorizonZz))

## [1.0.9] - 2024-05-21

### Changed

Added `use client` into all components to better support SSR.

## [1.0.8] - 2024-04-16

### Changed

Update the `@material/web` package to `1.4.1`

## [1.0.7] - 2024-04-01

### Fixed

-   Fixed the `@fontsource/roboto` CSS import issue in Vite bundler.
-   Add `storybook-static` in `.npmignore`

## [1.0.6] - 2024-04-01

### Fixed

-   Fixed the issue with the Textfield component missing events.

## [1.0.5] - 2024-03-27

### Added

-   Readme file updated with installation and usage instructions.
-   Storybook link added to the Readme file.

## [1.0.0] - 2024-03-27

### Added

-   Added all the components from the Material Web library.
