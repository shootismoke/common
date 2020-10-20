[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/race"](_packages_ui_src_util_race_.md)

# Module: "packages/ui/src/util/race"

## Index

### Interfaces

* [RaceApiOptions](../interfaces/_packages_ui_src_util_race_.raceapioptions.md)

### Variables

* [NORMALIZED_WITHIN_HOURS](_packages_ui_src_util_race_.md#const-normalized_within_hours)
* [l](_packages_ui_src_util_race_.md#const-l)

### Functions

* [createApi](_packages_ui_src_util_race_.md#createapi)
* [fetchForProvider](_packages_ui_src_util_race_.md#fetchforprovider)
* [raceApiPromise](_packages_ui_src_util_race_.md#raceapipromise)

## Variables

### `Const` NORMALIZED_WITHIN_HOURS

• **NORMALIZED_WITHIN_HOURS**: *6* = 6

*Defined in [packages/ui/src/util/race.ts:39](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/race.ts#L39)*

We show pm25 results within this number of hours. More than this, we
consider the results as inaccurate.

___

### `Const` l

• **l**: *Debugger* = debug('shootismoke:ui:race')

*Defined in [packages/ui/src/util/race.ts:33](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/race.ts#L33)*

## Functions

###  createApi

▸ **createApi**(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `normalized`: [Normalized](_packages_dataproviders_src_types_.md#normalized)): *[Api](../interfaces/_packages_ui_src_util_api_.api.md)*

*Defined in [packages/ui/src/util/race.ts:47](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/race.ts#L47)*

Given some normalized data points, and the current GPS, construct an API
object with sanitized data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | - |
`normalized` | [Normalized](_packages_dataproviders_src_types_.md#normalized) | The normalized data to process  |

**Returns:** *[Api](../interfaces/_packages_ui_src_util_api_.api.md)*

___

###  fetchForProvider

▸ **fetchForProvider**‹**DataByGps**, **DataByStation**, **Options**›(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `provider`: [ProviderPromise](../interfaces/_packages_dataproviders_src_types_.providerpromise.md)‹DataByGps, DataByStation, Options›, `options?`: Options): *Promise‹[Normalized](_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/ui/src/util/race.ts:81](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/race.ts#L81)*

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

*Defined in [packages/ui/src/util/race.ts:107](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/race.ts#L107)*

Fetch data parallely from difference data sources, and return the first
response as an [Api](../interfaces/_packages_ui_src_util_api_.api.md) format.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | The GPS coordinates to fetch data for  |
`options` | [RaceApiOptions](../interfaces/_packages_ui_src_util_race_.raceapioptions.md) | - |

**Returns:** *Promise‹[Api](../interfaces/_packages_ui_src_util_api_.api.md)›*
