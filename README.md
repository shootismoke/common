[![Actions Status](https://github.com/shootismoke/common/workflows/pr/badge.svg)](https://github.com/shootismoke/common/actions)
![GitHub](https://img.shields.io/github/license/shootismoke/common.svg)
[![David](https://img.shields.io/david/shootismoke/common.svg)](https://david-dm.org/shootismoke/common)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfeff2fb9de150607af9/maintainability)](https://codeclimate.com/github/shootismoke/common/maintainability)

# @shootismoke/common

Shared packages between Sh\*\*t! I Smoke projects.

## Packages

| Packages                                                 | NPM                                                                                                                                      | Description                                                                                 |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`@shootismoke/convert`](./packages/convert)             | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/convert.svg)](https://www.npmjs.com/package/@shootismoke/convert)             | A library to convert between AQI (US & CN) value and pollutant concentration (µg/m³ or ppm) |
| [`@shootismoke/dataproviders`](./packages/dataproviders) | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/dataproviders.svg)](https://www.npmjs.com/package/@shootismoke/dataproviders) | Fetch & normalize data from various air quality data providers (WAQI, AQICN)                |
| [`@shootismoke/graphql`](./packages/graphql)             | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/graphql.svg)](https://www.npmjs.com/package/@shootismoke/graphql)             | (Internal) TypeScript types for GraphQL schemas in Sh\*\*t! I Smoke backend and frontend    |

## FAQ

### Why is there a `tsconfig.json` and a `tsconfig.settings.json`?

Inside each package in the `packages/` folder, there is a `tsconfig.json`. This is the canonical `tsconfig.json` for each package. If you inspect it, it extends `tsconfig.settings.json`. So `tsconfig.settings.json` serves as a base template.

The root `tsconfig.json` is not used while building packages, it's only there for VSCode, so that jumping between packages is done smoothly.
