[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/types"](../modules/_packages_dataproviders_src_types_.md) › [Provider](_packages_dataproviders_src_types_.provider.md)

# Interface: Provider ‹**DataByGps, DataByStation, Options**›

An interface representing an air quality data provider (fp-ts version)

## Type parameters

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

## Hierarchy

* **Provider**

## Index

### Properties

* [id](_packages_dataproviders_src_types_.provider.md#id)
* [name](_packages_dataproviders_src_types_.provider.md#name)

### Methods

* [fetchByGps](_packages_dataproviders_src_types_.provider.md#fetchbygps)
* [fetchByStation](_packages_dataproviders_src_types_.provider.md#fetchbystation)
* [normalizeByGps](_packages_dataproviders_src_types_.provider.md#normalizebygps)
* [normalizeByStation](_packages_dataproviders_src_types_.provider.md#normalizebystation)

## Properties

###  id

• **id**: *string*

*Defined in [packages/dataproviders/src/types.ts:33](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/types.ts#L33)*

___

###  name

• **name**: *string*

*Defined in [packages/dataproviders/src/types.ts:34](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/types.ts#L34)*

## Methods

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](_packages_dataproviders_src_types_.latlng.md), `options?`: Options): *TaskEither‹Error, DataByGps›*

*Defined in [packages/dataproviders/src/types.ts:28](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/types.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](_packages_dataproviders_src_types_.latlng.md) |
`options?` | Options |

**Returns:** *TaskEither‹Error, DataByGps›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: Options): *TaskEither‹Error, DataByStation›*

*Defined in [packages/dataproviders/src/types.ts:29](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/types.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`stationId` | string |
`options?` | Options |

**Returns:** *TaskEither‹Error, DataByStation›*

___

###  normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *E.Either‹Error, [Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/dataproviders/src/types.ts:35](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/types.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByGps |

**Returns:** *E.Either‹Error, [Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)›*

___

###  normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *E.Either‹Error, [Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/dataproviders/src/types.ts:36](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/types.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByStation |

**Returns:** *E.Either‹Error, [Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)›*
