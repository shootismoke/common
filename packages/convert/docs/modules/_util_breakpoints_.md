[@shootismoke/convert](../README.md) › [Globals](../globals.md) › ["util/breakpoints"](_util_breakpoints_.md)

# External module: "util/breakpoints"

## Index

### Type aliases

* [Breakpoints](_util_breakpoints_.md#breakpoints)

### Functions

* [createAqiFromBreakpoints](_util_breakpoints_.md#createaqifrombreakpoints)
* [round](_util_breakpoints_.md#round)

## Type aliases

###  Breakpoints

Ƭ **Breakpoints**: *Record‹"aqi", Piecewise› & Partial‹Record‹[Pollutant](_util_pollutant_.md#pollutant), Piecewise››*

*Defined in [util/breakpoints.ts:19](https://github.com/shootismoke/common/blob/5e67d25/packages/convert/src/util/breakpoints.ts#L19)*

Piecewise breakpoints that define an AQI

## Functions

###  createAqiFromBreakpoints

▸ **createAqiFromBreakpoints**(`aqiCode`: string, `breakpoints`: [Breakpoints](_util_breakpoints_.md#breakpoints)): *Omit‹[Aqi](../interfaces/_types_.aqi.md), "displayName"›*

*Defined in [util/breakpoints.ts:117](https://github.com/shootismoke/common/blob/5e67d25/packages/convert/src/util/breakpoints.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`aqiCode` | string |
`breakpoints` | [Breakpoints](_util_breakpoints_.md#breakpoints) |

**Returns:** *Omit‹[Aqi](../interfaces/_types_.aqi.md), "displayName"›*

___

###  round

▸ **round**(`n`: number, `decimals`: number): *number*

*Defined in [util/breakpoints.ts:10](https://github.com/shootismoke/common/blob/5e67d25/packages/convert/src/util/breakpoints.ts#L10)*

Round a number to closest 10^-{decimal}

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`n` | number | - | The float number to round |
`decimals` | number | 0 | - |

**Returns:** *number*
