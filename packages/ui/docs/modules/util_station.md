[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/station

# Module: util/station

## Table of contents

### Type aliases

- [DistanceUnit](util_station.md#distanceunit)

### Variables

- [MAX\_DISTANCE\_TO\_STATION](util_station.md#max_distance_to_station)

### Functions

- [distanceToStation](util_station.md#distancetostation)
- [getCorrectLatLng](util_station.md#getcorrectlatlng)
- [isStationTooFar](util_station.md#isstationtoofar)

## Type aliases

### DistanceUnit

Ƭ **DistanceUnit**: *km* \| *mile*

We can show distances in these two units.

Defined in: [packages/ui/src/util/station.ts:27](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L27)

## Variables

### MAX\_DISTANCE\_TO\_STATION

• `Const` **MAX\_DISTANCE\_TO\_STATION**: *number*

Above this distance (km), we consider the station too far from the user

Defined in: [packages/ui/src/util/station.ts:32](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L32)

## Functions

### distanceToStation

▸ **distanceToStation**(`currentLocation`: LatLng, `pm25Measurement`: OpenAQResult, `unit?`: [*DistanceUnit*](util_station.md#distanceunit)): *number*

Get distance from current location to station.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`currentLocation` | LatLng | - | The current location of the user.   |
`pm25Measurement` | OpenAQResult | - | - |
`unit` | [*DistanceUnit*](util_station.md#distanceunit) | 'km' | The unit of measure returned.    |

**Returns:** *number*

Defined in: [packages/ui/src/util/station.ts:72](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L72)

___

### getCorrectLatLng

▸ **getCorrectLatLng**(`currentLocation`: LatLng, `station`: LatLng): LatLng

Station given by the AQICN API is fucked up. Sometimes it's [lat, lng],
sometimes it's [lng, lat].
We check here with the user's real currentLocation coordinates, and take the
"closest" one.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`currentLocation` | LatLng | An object containing {latitude, longitude} representing the user's current location.   |
`station` | LatLng | An object containing {latitude, longitude} representing the station's location.    |

**Returns:** LatLng

Defined in: [packages/ui/src/util/station.ts:45](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L45)

___

### isStationTooFar

▸ **isStationTooFar**(`currentLocation`: LatLng, `pm25Measurement`: OpenAQResult): *boolean*

Returns true if the station is at more than [MAX_DISTANCE_TO_STATION](util_station.md#max_distance_to_station)
kilometers away from the current location.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`currentLocation` | LatLng | The current location of the user.   |
`pm25Measurement` | OpenAQResult | - |

**Returns:** *boolean*

Defined in: [packages/ui/src/util/station.ts:101](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L101)
