[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/station"](_packages_ui_src_util_station_.md)

# Module: "packages/ui/src/util/station"

## Index

### Type aliases

* [DistanceUnit](_packages_ui_src_util_station_.md#distanceunit)

### Variables

* [MAX_DISTANCE_TO_STATION](_packages_ui_src_util_station_.md#const-max_distance_to_station)

### Functions

* [distanceToStation](_packages_ui_src_util_station_.md#distancetostation)
* [getCorrectLatLng](_packages_ui_src_util_station_.md#getcorrectlatlng)
* [isStationTooFar](_packages_ui_src_util_station_.md#isstationtoofar)

## Type aliases

###  DistanceUnit

Ƭ **DistanceUnit**: *"km" | "mile"*

*Defined in [packages/ui/src/util/station.ts:23](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/station.ts#L23)*

We can show distances in these two units.

## Variables

### `Const` MAX_DISTANCE_TO_STATION

• **MAX_DISTANCE_TO_STATION**: *10* = 10

*Defined in [packages/ui/src/util/station.ts:28](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/station.ts#L28)*

Above this distance (km), we consider the station too far from the user

## Functions

###  distanceToStation

▸ **distanceToStation**(`currentLocation`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `pm25Measurement`: [OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat), `unit`: [DistanceUnit](_packages_ui_src_util_station_.md#distanceunit)): *number*

*Defined in [packages/ui/src/util/station.ts:68](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/station.ts#L68)*

Get distance from current location to station.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`currentLocation` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | - | The current location of the user. |
`pm25Measurement` | [OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat) | - | - |
`unit` | [DistanceUnit](_packages_ui_src_util_station_.md#distanceunit) | "km" | The unit of measure returned.  |

**Returns:** *number*

___

###  getCorrectLatLng

▸ **getCorrectLatLng**(`currentLocation`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `station`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)): *[LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)*

*Defined in [packages/ui/src/util/station.ts:41](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/station.ts#L41)*

Station given by the AQICN API is fucked up. Sometimes it's [lat, lng],
sometimes it's [lng, lat].
We check here with the user's real currentLocation coordinates, and take the
"closest" one.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentLocation` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | An object containing {latitude, longitude} representing the user's current location. |
`station` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | An object containing {latitude, longitude} representing the station's location.  |

**Returns:** *[LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)*

___

###  isStationTooFar

▸ **isStationTooFar**(`currentLocation`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `pm25Measurement`: [OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat)): *boolean*

*Defined in [packages/ui/src/util/station.ts:97](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/station.ts#L97)*

Returns true if the station is at more than [MAX_DISTANCE_TO_STATION](_packages_ui_src_util_station_.md#const-max_distance_to_station)
kilometers away from the current location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentLocation` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | The current location of the user. |
`pm25Measurement` | [OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat) | - |

**Returns:** *boolean*
