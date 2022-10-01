[![Actions Status](https://github.com/shootismoke/common/workflows/pr/badge.svg)](https://github.com/shootismoke/common/actions)
![GitHub](https://img.shields.io/github/license/shootismoke/common.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfeff2fb9de150607af9/maintainability)](https://codeclimate.com/github/shootismoke/common/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2d517984b9b528fcd3cd/test_coverage)](https://codeclimate.com/github/shootismoke/common/test_coverage)

# `@shootismoke/common`

Useful packages for manipulating air quality data. Shared between [Sh\*\*t! I Smoke](https://shootismoke.app) projects.

## Packages

| Packages                                                 | NPM                                                                                                                                      | Description                                                                                                                                                                   |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@shootismoke/convert`](./packages/convert)             | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/convert.svg)](https://www.npmjs.com/package/@shootismoke/convert)             | Easily convert between AQIs (US, CN...) and raw concentration values (ug/m3, ppm)                                                                                             |
| [`@shootismoke/dataproviders`](./packages/dataproviders) | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/dataproviders.svg)](https://www.npmjs.com/package/@shootismoke/dataproviders) | A library to fetch air quality data from various providers (AqiCN, OpenAQ...) and normalizing data into one common format: the [openaq-data-format](#normalized-data-format). |

The below packages are used internally in [Sh\*\*t! I Smoke](https://shootismoke.app) projects, but if you're interested, feel free to use them.

| Packages                           | NPM                                                                                                                | Description                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [`@shootismoke/ui`](./packages/ui) | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/ui.svg)](https://www.npmjs.com/package/@shootismoke/ui) | (Internal) UI components shared across Web & React Native projects. |

## FAQ

### Why is there a `tsconfig.json` and a `tsconfig.settings.json`?

Inside each package in the `packages/` folder, there is a `tsconfig.settings.json`. This is the canonical config file for each package, used by `tsc`, because we use `-p tsconfig.settings.json`. If you inspect it, it extends `<rootDir>/tsconfig.settings.json`. So `<rootDir>/tsconfig.settings.json` serves as a base template.

The various `tsconfig.json` are not used while building packages, they are only there for VSCode, so that jumping between packages is done smoothly, because we defined TypeScript paths.
