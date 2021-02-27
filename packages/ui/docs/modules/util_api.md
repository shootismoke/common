[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/api

# Module: util/api

## Table of contents

### Interfaces

- [Api](../interfaces/util_api.api.md)

### Functions

- [createApi](util_api.md#createapi)
- [raceApiPromise](util_api.md#raceapipromise)
- [round](util_api.md#round)

## Functions

### createApi

▸ **createApi**(`gps`: LatLng, `results`: OpenAQResults): [*Api*](../interfaces/util_api.api.md)

Given some results data points, and the current GPS, construct an API
object with sanitized data.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gps` | LatLng | - |
`results` | OpenAQResults | The results results data to process    |

**Returns:** [*Api*](../interfaces/util_api.api.md)

Defined in: [packages/ui/src/util/api.ts:91](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L91)

___

### raceApiPromise

▸ **raceApiPromise**(`gps`: LatLng, `options`: RaceApiOptions): *Promise*<[*Api*](../interfaces/util_api.api.md)\>

Fetch data parallely from difference data sources, and return the first
response as an [Api](../interfaces/util_api.api.md) format.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gps` | LatLng | The GPS coordinates to fetch data for    |
`options` | RaceApiOptions | - |

**Returns:** *Promise*<[*Api*](../interfaces/util_api.api.md)\>

Defined in: [packages/ui/src/util/api.ts:155](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L155)

___

### round

▸ **round**(`n`: *number*): *number*

Round a number to 1 decimal. Useful for showing cigarettes on the home page.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`n` | *number* | The number to round;    |

**Returns:** *number*

Defined in: [packages/ui/src/util/api.ts:75](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L75)
