[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/waqi/fetchBy"](_packages_dataproviders_src_providers_waqi_fetchby_.md)

# Module: "packages/dataproviders/src/providers/waqi/fetchBy"

## Index

### Functions

* [fetchByGps](_packages_dataproviders_src_providers_waqi_fetchby_.md#fetchbygps)

## Functions

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)): *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*

*Defined in [packages/dataproviders/src/providers/waqi/fetchBy.ts:12](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/waqi/fetchBy.ts#L12)*

Fetch the closest station to the user's current position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | Latitude and longitude of the user's current position  |

**Returns:** *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*
