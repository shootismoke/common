[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["providers/aqicn/fetchBy"](_providers_aqicn_fetchby_.md)

# External module: "providers/aqicn/fetchBy"

## Index

### Interfaces

* [AqicnOptions](../interfaces/_providers_aqicn_fetchby_.aqicnoptions.md)

### Functions

* [fetchByGps](_providers_aqicn_fetchby_.md#fetchbygps)
* [fetchByStation](_providers_aqicn_fetchby_.md#fetchbystation)

## Functions

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](../interfaces/_types_.latlng.md), `options`: [AqicnOptions](../interfaces/_providers_aqicn_fetchby_.aqicnoptions.md)): *TaskEither‹Error, [ByStation](_providers_aqicn_validation_.md#bystation)›*

*Defined in [providers/aqicn/fetchBy.ts:49](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/providers/aqicn/fetchBy.ts#L49)*

Fetch the closest station to the user's current position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_types_.latlng.md) | Latitude and longitude of the user's current position  |
`options` | [AqicnOptions](../interfaces/_providers_aqicn_fetchby_.aqicnoptions.md) | - |

**Returns:** *TaskEither‹Error, [ByStation](_providers_aqicn_validation_.md#bystation)›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options`: [AqicnOptions](../interfaces/_providers_aqicn_fetchby_.aqicnoptions.md)): *TaskEither‹Error, [ByStation](_providers_aqicn_validation_.md#bystation)›*

*Defined in [providers/aqicn/fetchBy.ts:76](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/providers/aqicn/fetchBy.ts#L76)*

Fetch data by station

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stationId` | string | The station ID to search  |
`options` | [AqicnOptions](../interfaces/_providers_aqicn_fetchby_.aqicnoptions.md) | - |

**Returns:** *TaskEither‹Error, [ByStation](_providers_aqicn_validation_.md#bystation)›*
