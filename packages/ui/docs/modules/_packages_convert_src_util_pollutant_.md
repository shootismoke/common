[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/convert/src/util/pollutant"](_packages_convert_src_util_pollutant_.md)

# Module: "packages/convert/src/util/pollutant"

## Index

### Interfaces

* [PollutantMeta](../interfaces/_packages_convert_src_util_pollutant_.pollutantmeta.md)

### Type aliases

* [Pollutant](_packages_convert_src_util_pollutant_.md#pollutant)
* [Unit](_packages_convert_src_util_pollutant_.md#unit)

### Variables

* [AllPollutants](_packages_convert_src_util_pollutant_.md#const-allpollutants)
* [AllUnits](_packages_convert_src_util_pollutant_.md#const-allunits)
* [ppb](_packages_convert_src_util_pollutant_.md#const-ppb)
* [ppm](_packages_convert_src_util_pollutant_.md#const-ppm)
* [ugm3](_packages_convert_src_util_pollutant_.md#const-ugm3)

### Functions

* [getPollutantMeta](_packages_convert_src_util_pollutant_.md#getpollutantmeta)
* [isPollutant](_packages_convert_src_util_pollutant_.md#ispollutant)

## Type aliases

###  Pollutant

Ƭ **Pollutant**: *"bc" | "ch4" | "co" | "c6h6" | "ox" | "nh3" | "nmhc" | "no" | "nox" | "no2" | "o3" | "pm10" | "pm25" | "so2" | "trs"*

*Defined in [packages/convert/src/util/pollutant.ts:27](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L27)*

All the pollutants tracked by @shootismoke.

___

###  Unit

Ƭ **Unit**: *typeof ppb | typeof ppm | typeof ugm3*

*Defined in [packages/convert/src/util/pollutant.ts:22](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L22)*

Pollutant concentration units.

## Variables

### `Const` AllPollutants

• **AllPollutants**: *[Pollutant](_packages_convert_src_util_pollutant_.md#pollutant)[]* = Object.keys(Pollutants) as Pollutant[]

*Defined in [packages/convert/src/util/pollutant.ts:155](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L155)*

Array of all pollutants tracked by @shootismoke.

___

### `Const` AllUnits

• **AllUnits**: *string[]* = [ppb, ppm, ugm3]

*Defined in [packages/convert/src/util/pollutant.ts:17](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L17)*

Array of pollutant concentration units.

___

### `Const` ppb

• **ppb**: *"ppb"* = "ppb"

*Defined in [packages/convert/src/util/pollutant.ts:4](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L4)*

Parts per billion.

___

### `Const` ppm

• **ppm**: *"ppm"* = "ppm"

*Defined in [packages/convert/src/util/pollutant.ts:8](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L8)*

Parts per million.

___

### `Const` ugm3

• **ugm3**: *"µg/m³"* = "µg/m³"

*Defined in [packages/convert/src/util/pollutant.ts:12](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L12)*

Microgram per cubic meter.

## Functions

###  getPollutantMeta

▸ **getPollutantMeta**(`pollutant`: [Pollutant](_packages_convert_src_util_pollutant_.md#pollutant)): *[PollutantMeta](../interfaces/_packages_convert_src_util_pollutant_.pollutantmeta.md)*

*Defined in [packages/convert/src/util/pollutant.ts:162](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L162)*

Get metadata (code, name, description, unit) for a pollutant.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | [Pollutant](_packages_convert_src_util_pollutant_.md#pollutant) | The pollutant to get the metadata from.  |

**Returns:** *[PollutantMeta](../interfaces/_packages_convert_src_util_pollutant_.pollutantmeta.md)*

___

###  isPollutant

▸ **isPollutant**(`pollutant`: string): *pollutant is Pollutant*

*Defined in [packages/convert/src/util/pollutant.ts:172](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/util/pollutant.ts#L172)*

Check if the input pollutant is a recognized pollutant which we can convert
AQI to/from raw concentrations.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | string | The pollutant to test.  |

**Returns:** *pollutant is Pollutant*
