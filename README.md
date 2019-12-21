[![Actions Status](https://github.com/shootismoke/common/workflows/pr/badge.svg)](https://github.com/shootismoke/common/actions)
![GitHub](https://img.shields.io/github/license/shootismoke/common.svg)
[![David](https://img.shields.io/david/shootismoke/common.svg)](https://david-dm.org/shootismoke/common)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfeff2fb9de150607af9/maintainability)](https://codeclimate.com/github/shootismoke/common/maintainability)

# `@shootismoke/common`<sup>1</sup>

Useful packages for manipulating air quality data.

<sub><sup>1</sup>Shared packages between [Sh\*\*t! I Smoke](https://shootismoke.github.io) projects.</sub>

## Packages

The following packages are designed to be used by other people, there's a bigger chance you might be interested in these.

| Packages                                                 | NPM                                                                                                                                      | Description                                                                                                                                                                   |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@shootismoke/convert`](./packages/convert)             | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/convert.svg)](https://www.npmjs.com/package/@shootismoke/convert)             | Easily convert between AQIs (US, CN...) and raw concentration values (ug/m3, ppm)                                                                                             |
| [`@shootismoke/dataproviders`](./packages/dataproviders) | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/dataproviders.svg)](https://www.npmjs.com/package/@shootismoke/dataproviders) | A library to fetch air quality data from various providers (AqiCN, OpenAQ...) and normalizing data into one common format: the [openaq-data-format](#normalized-data-format). |

The following packages are used internally in Sh\*\*t! I Smoke projects, but if you're interested in them, feel free to use them.

| Packages                                     | NPM                                                                                                                          | Description                                                                              |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`@shootismoke/graphql`](./packages/graphql) | [![npm (scoped)](https://img.shields.io/npm/v/@shootismoke/graphql.svg)](https://www.npmjs.com/package/@shootismoke/graphql) | (Internal) TypeScript types for GraphQL schemas in Sh\*\*t! I Smoke backend and frontend |

## FAQ

### Why is there a `tsconfig.json` and a `tsconfig.settings.json`?

Inside each package in the `packages/` folder, there is a `tsconfig.json`. This is the canonical `tsconfig.json` for each package. If you inspect it, it extends `tsconfig.settings.json`. So `tsconfig.settings.json` serves as a base template.

The root `tsconfig.json` is not used while building packages, it's only there for VSCode, so that jumping between packages is done smoothly.
