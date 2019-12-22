[@shootismoke/convert](../README.md) › [Globals](../globals.md) › ["convert"](_convert_.md)

# External module: "convert"

## Index

### Functions

* [convert](_convert_.md#convert)

## Functions

###  convert

▸ **convert**<**From**, **To**>(`pollutant`: [Pollutant](_util_pollutant_.md#pollutant), `from`: From, `to`: To, `value`: number): *number*

*Defined in [convert.ts:14](https://github.com/shootismoke/common/blob/092361a/packages/convert/src/convert.ts#L14)*

For any pollutant, convert an AQI to its raw concentration, or vice versa,
or convert an AQI to another AQI

**Type parameters:**

▪ **From**: *[AqiCode](_types_.md#aqicode) | "raw"*

▪ **To**: *[AqiCode](_types_.md#aqicode) | "raw"*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | [Pollutant](_util_pollutant_.md#pollutant) | The pollutant to convert |
`from` | From | The type to convert from (either raw, or an AQI) |
`to` | To | The type to convert to (either raw, or an AQI) |
`value` | number | The value to convert  |

**Returns:** *number*
