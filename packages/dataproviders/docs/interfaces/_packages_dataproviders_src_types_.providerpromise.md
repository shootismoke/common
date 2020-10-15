[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/types"](../modules/_packages_dataproviders_src_types_.md) › [ProviderPromise](_packages_dataproviders_src_types_.providerpromise.md)

# Interface: ProviderPromise ‹**DataByGps, DataByStation, Options**›

An interface representing an air quality data provider (Promise version)

## Type parameters

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

## Hierarchy

* **ProviderPromise**

## Index

### Properties

* [id](_packages_dataproviders_src_types_.providerpromise.md#id)
* [name](_packages_dataproviders_src_types_.providerpromise.md#name)

### Methods

* [fetchByGps](_packages_dataproviders_src_types_.providerpromise.md#fetchbygps)
* [fetchByStation](_packages_dataproviders_src_types_.providerpromise.md#fetchbystation)
* [normalizeByGps](_packages_dataproviders_src_types_.providerpromise.md#normalizebygps)
* [normalizeByStation](_packages_dataproviders_src_types_.providerpromise.md#normalizebystation)

## Properties

###  id

• **id**: *string*

*Defined in [packages/dataproviders/src/types.ts:48](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/types.ts#L48)*

___

###  name

• **name**: *string*

*Defined in [packages/dataproviders/src/types.ts:49](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/types.ts#L49)*

## Methods

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](_packages_dataproviders_src_types_.latlng.md), `options?`: Options): *Promise‹DataByGps›*

*Defined in [packages/dataproviders/src/types.ts:43](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/types.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](_packages_dataproviders_src_types_.latlng.md) |
`options?` | Options |

**Returns:** *Promise‹DataByGps›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: Options): *Promise‹DataByStation›*

*Defined in [packages/dataproviders/src/types.ts:44](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/types.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`stationId` | string |
`options?` | Options |

**Returns:** *Promise‹DataByStation›*

___

###  normalizeByGps

▸ **normalizeByGps**(`d`: DataByGps): *[Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)*

*Defined in [packages/dataproviders/src/types.ts:50](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/types.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByGps |

**Returns:** *[Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)*

___

###  normalizeByStation

▸ **normalizeByStation**(`d`: DataByStation): *[Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)*

*Defined in [packages/dataproviders/src/types.ts:51](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | DataByStation |

**Returns:** *[Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)*
