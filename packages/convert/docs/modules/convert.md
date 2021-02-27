[@shootismoke/convert](../README.md) / [Exports](../modules.md) / convert

# Module: convert

## Table of contents

### Functions

- [convert](convert.md#convert)

## Functions

### convert

▸ **convert**(`pollutant`: [*Pollutant*](util_pollutant.md#pollutant), `from`: [*AqiCode*](types.md#aqicode) \| *ugm3*, `to`: [*AqiCode*](types.md#aqicode) \| *ugm3*, `value`: *number*): *number*

For any pollutant, convert an AQI to its ugm3 concentration, or vice versa,
or convert an AQI to another AQI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pollutant` | [*Pollutant*](util_pollutant.md#pollutant) | The pollutant to convert   |
`from` | [*AqiCode*](types.md#aqicode) \| *ugm3* | The type to convert from (either ugm3, or an AQI)   |
`to` | [*AqiCode*](types.md#aqicode) \| *ugm3* | The type to convert to (either ugm3, or an AQI)   |
`value` | *number* | The value to convert    |

**Returns:** *number*

Defined in: [convert.ts:14](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/convert.ts#L14)
