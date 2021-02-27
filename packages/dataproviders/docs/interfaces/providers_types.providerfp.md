[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / [providers/types](../modules/providers_types.md) / ProviderFP

# Interface: ProviderFP<DataByGps, DataByStation, Options\>

[providers/types](../modules/providers_types.md).ProviderFP

An interface representing an air quality data provider (fp-ts version).

## Type parameters

Name |
:------ |
`DataByGps` |
`DataByStation` |
`Options` |

## Table of contents

### Properties

- [id](providers_types.providerfp.md#id)
- [name](providers_types.providerfp.md#name)

### Methods

- [fetchByGps](providers_types.providerfp.md#fetchbygps)
- [fetchByStation](providers_types.providerfp.md#fetchbystation)
- [normalizeByGps](providers_types.providerfp.md#normalizebygps)
- [normalizeByStation](providers_types.providerfp.md#normalizebystation)

## Properties

### id

• **id**: *string*

Defined in: [providers/types.ts:15](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/providers/types.ts#L15)

___

### name

• **name**: *string*

Defined in: [providers/types.ts:16](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/providers/types.ts#L16)

## Methods

### fetchByGps

▸ **fetchByGps**(`gps`: [*LatLng*](types.latlng.md), `options?`: Options): *TaskEither*<Error, DataByGps\>

#### Parameters:

Name | Type |
:------ | :------ |
`gps` | [*LatLng*](types.latlng.md) |
`options?` | Options |

**Returns:** *TaskEither*<Error, DataByGps\>

Defined in: [providers/types.ts:10](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/providers/types.ts#L10)

___

### fetchByStation

▸ **fetchByStation**(`stationId`: *string*, `options?`: Options): *TaskEither*<Error, DataByStation\>

#### Parameters:

Name | Type |
:------ | :------ |
`stationId` | *string* |
`options?` | Options |

**Returns:** *TaskEither*<Error, DataByStation\>

Defined in: [providers/types.ts:11](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/providers/types.ts#L11)

___

### normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *Either*<Error, [*OpenAQResults*](../modules/types.md#openaqresults)\>

#### Parameters:

Name | Type |
:------ | :------ |
`d` | DataByGps |

**Returns:** *Either*<Error, [*OpenAQResults*](../modules/types.md#openaqresults)\>

Defined in: [providers/types.ts:17](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/providers/types.ts#L17)

___

### normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *Either*<Error, [*OpenAQResults*](../modules/types.md#openaqresults)\>

#### Parameters:

Name | Type |
:------ | :------ |
`d` | DataByStation |

**Returns:** *Either*<Error, [*OpenAQResults*](../modules/types.md#openaqresults)\>

Defined in: [providers/types.ts:18](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/providers/types.ts#L18)
