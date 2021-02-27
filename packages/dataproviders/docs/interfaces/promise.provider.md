[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / [promise](../modules/promise.md) / Provider

# Interface: Provider<DataByGps, DataByStation, Options\>

[promise](../modules/promise.md).Provider

An interface representing an air quality data Provider (Promise version).

## Type parameters

Name |
:------ |
`DataByGps` |
`DataByStation` |
`Options` |

## Table of contents

### Properties

- [id](promise.provider.md#id)
- [name](promise.provider.md#name)

### Methods

- [fetchByGps](promise.provider.md#fetchbygps)
- [fetchByStation](promise.provider.md#fetchbystation)
- [normalizeByGps](promise.provider.md#normalizebygps)
- [normalizeByStation](promise.provider.md#normalizebystation)

## Properties

### id

• **id**: *string*

Defined in: [promise.ts:19](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L19)

___

### name

• **name**: *string*

Defined in: [promise.ts:20](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L20)

## Methods

### fetchByGps

▸ **fetchByGps**(`gps`: [*LatLng*](types.latlng.md), `options?`: Options): *Promise*<DataByGps\>

#### Parameters:

Name | Type |
:------ | :------ |
`gps` | [*LatLng*](types.latlng.md) |
`options?` | Options |

**Returns:** *Promise*<DataByGps\>

Defined in: [promise.ts:14](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L14)

___

### fetchByStation

▸ **fetchByStation**(`stationId`: *string*, `options?`: Options): *Promise*<DataByStation\>

#### Parameters:

Name | Type |
:------ | :------ |
`stationId` | *string* |
`options?` | Options |

**Returns:** *Promise*<DataByStation\>

Defined in: [promise.ts:15](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L15)

___

### normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): [*OpenAQResults*](../modules/types.md#openaqresults)

#### Parameters:

Name | Type |
:------ | :------ |
`d` | DataByGps |

**Returns:** [*OpenAQResults*](../modules/types.md#openaqresults)

Defined in: [promise.ts:21](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L21)

___

### normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): [*OpenAQResults*](../modules/types.md#openaqresults)

#### Parameters:

Name | Type |
:------ | :------ |
`d` | DataByStation |

**Returns:** [*OpenAQResults*](../modules/types.md#openaqresults)

Defined in: [promise.ts:22](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L22)
