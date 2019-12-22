[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ProviderPromise](_types_.providerpromise.md)

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

*Defined in [types.ts:39](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/types.ts#L39)*

___

###  name

• **name**: *string*

*Defined in [types.ts:40](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/types.ts#L40)*

## Methods

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](_types_.latlng.md), `options?`: Options): *Promise‹DataByGps›*

*Defined in [types.ts:37](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/types.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](_types_.latlng.md) |
`options?` | Options |

**Returns:** *Promise‹DataByGps›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: Options): *Promise‹DataByStation›*

*Defined in [types.ts:38](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/types.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`stationId` | string |
`options?` | Options |

**Returns:** *Promise‹DataByStation›*

___

###  normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *[Normalized](../modules/_types_.md#normalized)*

*Defined in [types.ts:41](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/types.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByGps |

**Returns:** *[Normalized](../modules/_types_.md#normalized)*

___

###  normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *[Normalized](../modules/_types_.md#normalized)*

*Defined in [types.ts:42](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/types.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByStation |

**Returns:** *[Normalized](../modules/_types_.md#normalized)*
