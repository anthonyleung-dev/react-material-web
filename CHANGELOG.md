# React Material Web Components Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2024-08-13

### Changed
- Updated the `@material/web` package to `2.0.0`
- Removed the CSS import in `src/index.tsx`, Now the CSS import is optional.

## [1.0.10] - 2024-05-31

### Changed
- Updated the `@material/web` package to `1.5.0`

### Fixed
- Added missing elements to some components([#6](https://github.com/anthonyleung-dev/react-material-web/pull/6) Thanks to [zZHorizonZz](https://github.com/zZHorizonZz))

## [1.0.9] - 2024-05-21

### Changed
Added `use client` into all components to better support SSR.

## [1.0.8] - 2024-04-16

### Changed
Update the `@material/web` package to `1.4.1`

## [1.0.7] - 2024-04-01

### Fixed
- Fixed the `@fontsource/roboto` CSS import issue in Vite bundler.
- Add `storybook-static` in `.npmignore`

## [1.0.6] - 2024-04-01

### Fixed
- Fixed the issue with the Textfield component missing events.

## [1.0.5] - 2024-03-27

### Added
- Readme file updated with installation and usage instructions.
- Storybook link added to the Readme file.

## [1.0.0] - 2024-03-27

### Added
- Added all the components from the Material Web library.