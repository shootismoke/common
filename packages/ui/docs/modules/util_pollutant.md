[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/pollutant

# Module: util/pollutant

## Table of contents

### Functions

- [getAQI](util_pollutant.md#getaqi)
- [getPollutantData](util_pollutant.md#getpollutantdata)
- [primaryPollutant](util_pollutant.md#primarypollutant)

## Functions

### getAQI

▸ **getAQI**(`OpenAQResults`: OpenAQResults): *number*

From a set of OpenAQResults pollutant data, get the AQI, that is, the AQI of
the primary pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`OpenAQResults` | OpenAQResults | The OpenAQResults data for all pollutants.    |

**Returns:** *number*

Defined in: [packages/ui/src/util/pollutant.ts:128](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/pollutant.ts#L128)

___

### getPollutantData

▸ **getPollutantData**(`pollutant`: Pollutant): PollutantData

Get metadata about a pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pollutant` | Pollutant | The pollutant to get the data.    |

**Returns:** PollutantData

Defined in: [packages/ui/src/util/pollutant.ts:89](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/pollutant.ts#L89)

___

### primaryPollutant

▸ **primaryPollutant**(`OpenAQResults`: OpenAQResults): OpenAQResult

From a set of OpenAQResults pollutant data, find the primary pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`OpenAQResults` | OpenAQResults | The OpenAQResults data for all pollutants.    |

**Returns:** OpenAQResult

Defined in: [packages/ui/src/util/pollutant.ts:146](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/pollutant.ts#L146)
