[@shootismoke/dataproviders - v0.2.3](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ProviderPromise](_types_.providerpromise.md)

# Interface: ProviderPromise <**DataByGps, DataByStation, Options**>

An interface representing an air quality data provider (Promise version)

## Type parameters

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

## Hierarchy

* **ProviderPromise**

## Index

### Properties

* [id](_types_.providerpromise.md#id)
* [name](_types_.providerpromise.md#name)

### Methods

* [fetchByGps](_types_.providerpromise.md#fetchbygps)
* [fetchByStation](_types_.providerpromise.md#fetchbystation)
* [normalizeByGps](_types_.providerpromise.md#normalizebygps)
* [normalizeByStation](_types_.providerpromise.md#normalizebystation)

## Properties

###  id

• **id**: *string*

*Defined in [types.ts:45](https://github.com/shootismoke/common/blob/73ace9d/packages/dataproviders/src/types.ts#L45)*

___

###  name

• **name**: *string*

*Defined in [types.ts:46](https://github.com/shootismoke/common/blob/73ace9d/packages/dataproviders/src/types.ts#L46)*

## Methods

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](_types_.latlng.md), `options?`: Options): *Promise‹DataByGps›*

*Defined in [types.ts:43](https://github.com/shootismoke/common/blob/73ace9d/packages/dataproviders/src/types.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](_types_.latlng.md) |
`options?` | Options |

**Returns:** *Promise‹DataByGps›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: Options): *Promise‹DataByStation›*

*Defined in [types.ts:44](https://github.com/shootismoke/common/blob/73ace9d/packages/dataproviders/src/types.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`stationId` | string |
`options?` | Options |

**Returns:** *Promise‹DataByStation›*

___

###  normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *[Normalized](../modules/_types_.md#normalized)*

*Defined in [types.ts:47](https://github.com/shootismoke/common/blob/73ace9d/packages/dataproviders/src/types.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByGps |

**Returns:** *[Normalized](../modules/_types_.md#normalized)*

___

###  normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *[Normalized](../modules/_types_.md#normalized)*

*Defined in [types.ts:48](https://github.com/shootismoke/common/blob/73ace9d/packages/dataproviders/src/types.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByStation |

**Returns:** *[Normalized](../modules/_types_.md#normalized)*
