[@shootismoke/convert](../README.md) / [Exports](../modules.md) / util/pollutant

# Module: util/pollutant

## Table of contents

### Interfaces

- [PollutantMeta](../interfaces/util_pollutant.pollutantmeta.md)

### Type aliases

- [Pollutant](util_pollutant.md#pollutant)
- [Unit](util_pollutant.md#unit)

### Variables

- [AllPollutants](util_pollutant.md#allpollutants)
- [AllUnits](util_pollutant.md#allunits)
- [ppb](util_pollutant.md#ppb)
- [ppm](util_pollutant.md#ppm)
- [ugm3](util_pollutant.md#ugm3)

### Functions

- [getPollutantMeta](util_pollutant.md#getpollutantmeta)
- [isPollutant](util_pollutant.md#ispollutant)

## Type aliases

### Pollutant

Ƭ **Pollutant**: *bc* \| *ch4* \| *co* \| *c6h6* \| *ox* \| *nh3* \| *nmhc* \| *no* \| *nox* \| *no2* \| *o3* \| *pm10* \| *pm25* \| *so2* \| *trs*

All the pollutants tracked by @shootismoke.

Defined in: [util/pollutant.ts:27](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L27)

___

### Unit

Ƭ **Unit**: *typeof* [*ppb*](util_pollutant.md#ppb) \| *typeof* [*ppm*](util_pollutant.md#ppm) \| *typeof* [*ugm3*](util_pollutant.md#ugm3)

Pollutant concentration units.

Defined in: [util/pollutant.ts:22](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L22)

## Variables

### AllPollutants

• `Const` **AllPollutants**: [*Pollutant*](util_pollutant.md#pollutant)[]

Array of all pollutants tracked by @shootismoke.

Defined in: [util/pollutant.ts:155](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L155)

___

### AllUnits

• `Const` **AllUnits**: *string*[]

Array of pollutant concentration units.

Defined in: [util/pollutant.ts:17](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L17)

___

### ppb

• `Const` **ppb**: *ppb*= 'ppb'

Parts per billion.

Defined in: [util/pollutant.ts:4](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L4)

___

### ppm

• `Const` **ppm**: *ppm*= 'ppm'

Parts per million.

Defined in: [util/pollutant.ts:8](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L8)

___

### ugm3

• `Const` **ugm3**: *µg/m³*= 'µg/m³'

Microgram per cubic meter.

Defined in: [util/pollutant.ts:12](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L12)

## Functions

### getPollutantMeta

▸ **getPollutantMeta**(`pollutant`: [*Pollutant*](util_pollutant.md#pollutant)): [*PollutantMeta*](../interfaces/util_pollutant.pollutantmeta.md)

Get metadata (code, name, description, unit) for a pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pollutant` | [*Pollutant*](util_pollutant.md#pollutant) | The pollutant to get the metadata from.    |

**Returns:** [*PollutantMeta*](../interfaces/util_pollutant.pollutantmeta.md)

Defined in: [util/pollutant.ts:162](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L162)

___

### isPollutant

▸ **isPollutant**(`pollutant`: *string*): pollutant is Pollutant

Check if the input pollutant is a recognized pollutant which we can convert
AQI to/from concentrations.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pollutant` | *string* | The pollutant to test.    |

**Returns:** pollutant is Pollutant

Defined in: [util/pollutant.ts:172](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/util/pollutant.ts#L172)
