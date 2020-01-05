[@shootismoke/dataproviders - v0.2.3](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Provider](_types_.provider.md)

# Interface: Provider <**DataByGps, DataByStation, Options**>

An interface representing an air quality data provider (fp-ts version)

## Type parameters

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

## Hierarchy

* **Provider**

## Index

### Properties

* [id](_types_.provider.md#id)
* [name](_types_.provider.md#name)

### Methods

* [fetchByGps](_types_.provider.md#fetchbygps)
* [fetchByStation](_types_.provider.md#fetchbystation)
* [normalizeByGps](_types_.provider.md#normalizebygps)
* [normalizeByStation](_types_.provider.md#normalizebystation)

## Properties

###  id

• **id**: *string*

*Defined in [types.ts:33](https://github.com/shootismoke/common/blob/b01485a/packages/dataproviders/src/types.ts#L33)*

___

###  name

• **name**: *string*

*Defined in [types.ts:34](https://github.com/shootismoke/common/blob/b01485a/packages/dataproviders/src/types.ts#L34)*

## Methods

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](_types_.latlng.md), `options?`: Options): *TaskEither‹Error, DataByGps›*

*Defined in [types.ts:28](https://github.com/shootismoke/common/blob/b01485a/packages/dataproviders/src/types.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](_types_.latlng.md) |
`options?` | Options |

**Returns:** *TaskEither‹Error, DataByGps›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: Options): *TaskEither‹Error, DataByStation›*

*Defined in [types.ts:29](https://github.com/shootismoke/common/blob/b01485a/packages/dataproviders/src/types.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`stationId` | string |
`options?` | Options |

**Returns:** *TaskEither‹Error, DataByStation›*

___

###  normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *E.Either‹Error, [Normalized](../modules/_types_.md#normalized)›*

*Defined in [types.ts:35](https://github.com/shootismoke/common/blob/b01485a/packages/dataproviders/src/types.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByGps |

**Returns:** *E.Either‹Error, [Normalized](../modules/_types_.md#normalized)›*

___

###  normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *E.Either‹Error, [Normalized](../modules/_types_.md#normalized)›*

*Defined in [types.ts:36](https://github.com/shootismoke/common/blob/b01485a/packages/dataproviders/src/types.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByStation |

**Returns:** *E.Either‹Error, [Normalized](../modules/_types_.md#normalized)›*
