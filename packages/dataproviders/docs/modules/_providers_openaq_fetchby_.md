[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["providers/openaq/fetchBy"](_providers_openaq_fetchby_.md)

# External module: "providers/openaq/fetchBy"

## Index

### Functions

* [fetchByGps](_providers_openaq_fetchby_.md#fetchbygps)
* [fetchByStation](_providers_openaq_fetchby_.md#fetchbystation)

## Functions

###  fetchByGps

▸ **fetchByGps**(`gps`: LatLng): *TaskEither‹Error, [Measurements](_providers_openaq_validation_.md#measurements)›*

*Defined in [providers/openaq/fetchBy.ts:17](https://github.com/shootismoke/common/blob/eaab9f5/packages/dataproviders/src/providers/openaq/fetchBy.ts#L17)*

Fetch the closest station to the user's current position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | LatLng | Latitude and longitude of the user's current position  |

**Returns:** *TaskEither‹Error, [Measurements](_providers_openaq_validation_.md#measurements)›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string): *TaskEither‹Error, [Measurements](_providers_openaq_validation_.md#measurements)›*

*Defined in [providers/openaq/fetchBy.ts:37](https://github.com/shootismoke/common/blob/eaab9f5/packages/dataproviders/src/providers/openaq/fetchBy.ts#L37)*

Fetch data by station

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stationId` | string | The station ID to search  |

**Returns:** *TaskEither‹Error, [Measurements](_providers_openaq_validation_.md#measurements)›*
