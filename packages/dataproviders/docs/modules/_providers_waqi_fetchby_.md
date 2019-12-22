[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["providers/waqi/fetchBy"](_providers_waqi_fetchby_.md)

# External module: "providers/waqi/fetchBy"

## Index

### Functions

* [fetchByGps](_providers_waqi_fetchby_.md#fetchbygps)

## Functions

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](../interfaces/_types_.latlng.md)): *TaskEither‹Error, [ByStation](_providers_aqicn_validation_.md#bystation)›*

*Defined in [providers/waqi/fetchBy.ts:14](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/providers/waqi/fetchBy.ts#L14)*

Fetch the closest station to the user's current position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_types_.latlng.md) | Latitude and longitude of the user's current position  |

**Returns:** *TaskEither‹Error, [ByStation](_providers_aqicn_validation_.md#bystation)›*
