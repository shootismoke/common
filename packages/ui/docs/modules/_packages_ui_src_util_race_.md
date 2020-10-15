[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/race"](_packages_ui_src_util_race_.md)

# Module: "packages/ui/src/util/race"

## Index

### Interfaces

* [RaceApiOptions](../interfaces/_packages_ui_src_util_race_.raceapioptions.md)

### Variables

* [l](_packages_ui_src_util_race_.md#const-l)

### Functions

* [createApi](_packages_ui_src_util_race_.md#createapi)
* [fetchForProvider](_packages_ui_src_util_race_.md#fetchforprovider)
* [raceApiPromise](_packages_ui_src_util_race_.md#raceapipromise)

## Variables

### `Const` l

• **l**: *Debugger* = debug('shootismoke:ui:race')

*Defined in [packages/ui/src/util/race.ts:31](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/race.ts#L31)*

## Functions

###  createApi

▸ **createApi**(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `normalized`: [Normalized](_packages_dataproviders_src_types_.md#normalized)): *[Api](../interfaces/_packages_ui_src_util_api_.api.md)*

*Defined in [packages/ui/src/util/race.ts:40](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/race.ts#L40)*

Given some normalized data points, filter out the first one that contains
pm25 data. Returns a TaskEither left is none is found, or format the data
into the Api interface.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | - |
`normalized` | [Normalized](_packages_dataproviders_src_types_.md#normalized) | The normalized data to process  |

**Returns:** *[Api](../interfaces/_packages_ui_src_util_api_.api.md)*

___

###  fetchForProvider

▸ **fetchForProvider**‹**DataByGps**, **DataByStation**, **Options**›(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `provider`: [ProviderPromise](../interfaces/_packages_dataproviders_src_types_.providerpromise.md)‹DataByGps, DataByStation, Options›, `options?`: Options): *Promise‹[Normalized](_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/ui/src/util/race.ts:64](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/race.ts#L64)*

Helper function to fetch & normalize data for 1 provider.

**Type parameters:**

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

**Parameters:**

Name | Type |
------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) |
`provider` | [ProviderPromise](../interfaces/_packages_dataproviders_src_types_.providerpromise.md)‹DataByGps, DataByStation, Options› |
`options?` | Options |

**Returns:** *Promise‹[Normalized](_packages_dataproviders_src_types_.md#normalized)›*

___

###  raceApiPromise

▸ **raceApiPromise**(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `options`: [RaceApiOptions](../interfaces/_packages_ui_src_util_race_.raceapioptions.md)): *Promise‹[Api](../interfaces/_packages_ui_src_util_api_.api.md)›*

*Defined in [packages/ui/src/util/race.ts:95](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/race.ts#L95)*

Fetch data parallely from difference data sources, and return the first
response as an [Api](../interfaces/_packages_ui_src_util_api_.api.md) format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | The GPS coordinates to fetch data for  |
`options` | [RaceApiOptions](../interfaces/_packages_ui_src_util_race_.raceapioptions.md) | - |

**Returns:** *Promise‹[Api](../interfaces/_packages_ui_src_util_api_.api.md)›*
