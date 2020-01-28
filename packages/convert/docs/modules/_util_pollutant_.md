[@shootismoke/convert](../README.md) › [Globals](../globals.md) › ["util/pollutant"](_util_pollutant_.md)

# External module: "util/pollutant"

## Index

### Interfaces

* [PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)

### Type aliases

* [Pollutant](_util_pollutant_.md#pollutant)
* [Unit](_util_pollutant_.md#unit)

### Variables

* [AllPollutants](_util_pollutant_.md#const-allpollutants)
* [AllUnits](_util_pollutant_.md#const-allunits)
* [ppb](_util_pollutant_.md#const-ppb)
* [ppm](_util_pollutant_.md#const-ppm)
* [ugm3](_util_pollutant_.md#const-ugm3)

### Functions

* [getPollutantMeta](_util_pollutant_.md#getpollutantmeta)
* [isPollutant](_util_pollutant_.md#ispollutant)

## Type aliases

###  Pollutant

Ƭ **Pollutant**: *"co" | "c6h6" | "ox" | "nh3" | "nmhc" | "no" | "nox" | "no2" | "o3" | "pm10" | "pm25" | "so2" | "trs"*

*Defined in [util/pollutant.ts:27](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L27)*

All the pollutants tracked by @shootismoke.

___

###  Unit

Ƭ **Unit**: *typeof ppb | typeof ppm | typeof ugm3*

*Defined in [util/pollutant.ts:22](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L22)*

Pollutant concentration units.

## Variables

### `Const` AllPollutants

• **AllPollutants**: *"co" | "c6h6" | "ox" | "nh3" | "nmhc" | "no" | "nox" | "no2" | "o3" | "pm10" | "pm25" | "so2" | "trs"[]* = Object.keys(Pollutants) as Pollutant[]

*Defined in [util/pollutant.ts:141](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L141)*

Array of all pollutants tracked by @shootismoke.

___

### `Const` AllUnits

• **AllUnits**: *string[]* = [ppb, ppm, ugm3]

*Defined in [util/pollutant.ts:17](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L17)*

Array of pollutant concentration units.

___

### `Const` ppb

• **ppb**: *"ppb"* = "ppb"

*Defined in [util/pollutant.ts:4](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L4)*

Parts per billion.

___

### `Const` ppm

• **ppm**: *"ppm"* = "ppm"

*Defined in [util/pollutant.ts:8](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L8)*

Parts per million.

___

### `Const` ugm3

• **ugm3**: *"µg/m³"* = "µg/m³"

*Defined in [util/pollutant.ts:12](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L12)*

Microgram per cubic meter.

## Functions

###  getPollutantMeta

▸ **getPollutantMeta**(`pollutant`: [Pollutant](_util_pollutant_.md#pollutant)): *[PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)*

*Defined in [util/pollutant.ts:148](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L148)*

Get metadata (code, name, description, unit) for a pollutant.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | [Pollutant](_util_pollutant_.md#pollutant) | The pollutant to get the metadata from.  |

**Returns:** *[PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)*

___

###  isPollutant

▸ **isPollutant**(`pollutant`: string): *pollutant is Pollutant*

*Defined in [util/pollutant.ts:158](https://github.com/shootismoke/common/blob/3cf9705/packages/convert/src/util/pollutant.ts#L158)*

Check if the input pollutant is a recognized pollutant which we can convert
AQI to/from raw concentrations.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | string | The pollutant to test.  |

**Returns:** *pollutant is Pollutant*
