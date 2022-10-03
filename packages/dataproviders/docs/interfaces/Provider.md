[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / Provider

# Interface: Provider<DataByGps, DataByStation, Options\>

An interface representing an air quality data Provider (Promise version).

## Type parameters

| Name |
| :------ |
| `DataByGps` |
| `DataByStation` |
| `Options` |

## Table of contents

### Properties

- [id](Provider.md#id)
- [name](Provider.md#name)

### Methods

- [fetchByGps](Provider.md#fetchbygps)
- [fetchByStation](Provider.md#fetchbystation)
- [normalizeByGps](Provider.md#normalizebygps)
- [normalizeByStation](Provider.md#normalizebystation)

## Properties

### id

• **id**: `string`

#### Defined in

[packages/dataproviders/src/promise.ts:19](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L19)

___

### name

• **name**: `string`

#### Defined in

[packages/dataproviders/src/promise.ts:20](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L20)

## Methods

### fetchByGps

▸ **fetchByGps**(`gps`, `options?`): `Promise`<`DataByGps`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gps` | [`LatLng`](LatLng.md) |
| `options?` | `Options` |

#### Returns

`Promise`<`DataByGps`\>

#### Defined in

[packages/dataproviders/src/promise.ts:14](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L14)

___

### fetchByStation

▸ **fetchByStation**(`stationId`, `options?`): `Promise`<`DataByStation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stationId` | `string` |
| `options?` | `Options` |

#### Returns

`Promise`<`DataByStation`\>

#### Defined in

[packages/dataproviders/src/promise.ts:15](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L15)

___

### normalizeByGps

▸ **normalizeByGps**(`d`): [`OpenAQResults`](../modules.md#openaqresults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `DataByGps` |

#### Returns

[`OpenAQResults`](../modules.md#openaqresults)

#### Defined in

[packages/dataproviders/src/promise.ts:21](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L21)

___

### normalizeByStation

▸ **normalizeByStation**(`d`): [`OpenAQResults`](../modules.md#openaqresults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `DataByStation` |

#### Returns

[`OpenAQResults`](../modules.md#openaqresults)

#### Defined in

[packages/dataproviders/src/promise.ts:22](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L22)
