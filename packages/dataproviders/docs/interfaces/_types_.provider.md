[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Provider](_types_.provider.md)

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

*Defined in [types.ts:27](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/types.ts#L27)*

___

###  name

• **name**: *string*

*Defined in [types.ts:28](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/types.ts#L28)*

## Methods

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](_types_.latlng.md), `options?`: Options): *TaskEither‹Error, DataByGps›*

*Defined in [types.ts:22](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/types.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](_types_.latlng.md) |
`options?` | Options |

**Returns:** *TaskEither‹Error, DataByGps›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: Options): *TaskEither‹Error, DataByStation›*

*Defined in [types.ts:23](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/types.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`stationId` | string |
`options?` | Options |

**Returns:** *TaskEither‹Error, DataByStation›*

___

###  normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *[Normalized](../modules/_types_.md#normalized)*

*Defined in [types.ts:29](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/types.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByGps |

**Returns:** *[Normalized](../modules/_types_.md#normalized)*

___

###  normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *[Normalized](../modules/_types_.md#normalized)*

*Defined in [types.ts:30](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/types.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByStation |

**Returns:** *[Normalized](../modules/_types_.md#normalized)*
