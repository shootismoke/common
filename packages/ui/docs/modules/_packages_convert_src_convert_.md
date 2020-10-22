[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/convert/src/convert"](_packages_convert_src_convert_.md)

# Module: "packages/convert/src/convert"

## Index

### Functions

* [convert](_packages_convert_src_convert_.md#convert)

## Functions

###  convert

▸ **convert**‹**From**, **To**›(`pollutant`: [Pollutant](_packages_convert_src_util_pollutant_.md#pollutant), `from`: From, `to`: To, `value`: number): *number*

*Defined in [packages/convert/src/convert.ts:14](https://github.com/shootismoke/common/blob/c0e7829/packages/convert/src/convert.ts#L14)*

For any pollutant, convert an AQI to its raw concentration, or vice versa,
or convert an AQI to another AQI

**Type parameters:**

▪ **From**: *[AqiCode](_packages_convert_src_types_.md#aqicode) | "raw"*

▪ **To**: *[AqiCode](_packages_convert_src_types_.md#aqicode) | "raw"*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | [Pollutant](_packages_convert_src_util_pollutant_.md#pollutant) | The pollutant to convert |
`from` | From | The type to convert from (either raw, or an AQI) |
`to` | To | The type to convert to (either raw, or an AQI) |
`value` | number | The value to convert  |

**Returns:** *number*
