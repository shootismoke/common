[@shootismoke/convert](README.md) / Exports

# @shootismoke/convert

## Table of contents

### Interfaces

- [Aqi](interfaces/Aqi.md)
- [PollutantMeta](interfaces/PollutantMeta.md)

### Type Aliases

- [AqiCode](modules.md#aqicode)
- [Pollutant](modules.md#pollutant)
- [Unit](modules.md#unit)

### Variables

- [AllPollutants](modules.md#allpollutants)
- [AllUnits](modules.md#allunits)
- [chnMep](modules.md#chnmep)
- [ppb](modules.md#ppb)
- [ppcm3](modules.md#ppcm3)
- [ppm](modules.md#ppm)
- [ugm3](modules.md#ugm3)
- [usaEpa](modules.md#usaepa)

### Functions

- [convert](modules.md#convert)
- [getPollutantMeta](modules.md#getpollutantmeta)
- [isPollutant](modules.md#ispollutant)

## Type Aliases

### AqiCode

Ƭ **AqiCode**: keyof typeof `aqiCodes`

List of AQI codes

#### Defined in

[types.ts:18](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/types.ts#L18)

___

### Pollutant

Ƭ **Pollutant**: ``"bc"`` \| ``"ch4"`` \| ``"co"`` \| ``"c6h6"`` \| ``"ox"`` \| ``"nh3"`` \| ``"nmhc"`` \| ``"no"`` \| ``"nox"`` \| ``"no2"`` \| ``"o3"`` \| ``"pm1"`` \| ``"pm10"`` \| ``"pm25"`` \| ``"so2"`` \| ``"trs"`` \| ``"ufp"`` \| ``"um010"`` \| ``"um025"`` \| ``"um100"``

All the pollutants tracked by @shootismoke.

#### Defined in

[util/pollutant.ts:7](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/pollutant.ts#L7)

___

### Unit

Ƭ **Unit**: typeof [`ppb`](modules.md#ppb) \| typeof [`ppm`](modules.md#ppm) \| typeof [`ugm3`](modules.md#ugm3) \| typeof [`ppcm3`](modules.md#ppcm3)

Pollutant concentration units.

#### Defined in

[util/unit.ts:26](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/unit.ts#L26)

## Variables

### AllPollutants

• `Const` **AllPollutants**: [`Pollutant`](modules.md#pollutant)[]

Array of all pollutants tracked by @shootismoke. This list is fetched from:
https://docs.openaq.org/v2/parameters

#### Defined in

[util/pollutant.ts:94](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/pollutant.ts#L94)

___

### AllUnits

• `Const` **AllUnits**: `string`[]

Array of pollutant concentration units.

#### Defined in

[util/unit.ts:21](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/unit.ts#L21)

___

### chnMep

• `Const` **chnMep**: [`Aqi`](interfaces/Aqi.md)

AQI (CN)

**`See`**

https://kjs.mep.gov.cn/hjbhbz/bzwb/dqhjbh/jcgfffbz/201203/t20120302_224166.htm

#### Defined in

[aqi/chnMep/chnMep.ts:9](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/aqi/chnMep/chnMep.ts#L9)

___

### ppb

• `Const` **ppb**: ``"ppb"``

Parts per billion.

#### Defined in

[util/unit.ts:4](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/unit.ts#L4)

___

### ppcm3

• `Const` **ppcm3**: ``"particles/cm³"``

Particles per cubic centermeter.

#### Defined in

[util/unit.ts:16](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/unit.ts#L16)

___

### ppm

• `Const` **ppm**: ``"ppm"``

Parts per million.

#### Defined in

[util/unit.ts:8](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/unit.ts#L8)

___

### ugm3

• `Const` **ugm3**: ``"µg/m³"``

Microgram per cubic meter.

#### Defined in

[util/unit.ts:12](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/unit.ts#L12)

___

### usaEpa

• `Const` **usaEpa**: [`Aqi`](interfaces/Aqi.md)

AQI (US)

**`See`**

https://www3.epa.gov/airnow/aqi-technical-assistance-document-sept2018.pdf

#### Defined in

[aqi/usaEpa/usaEpa.ts:9](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/aqi/usaEpa/usaEpa.ts#L9)

## Functions

### convert

▸ **convert**(`pollutant`, `from`, `to`, `value`): `number`

For any pollutant, convert an AQI to its ugm3 concentration, or vice versa,
or convert an AQI to another AQI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pollutant` | [`Pollutant`](modules.md#pollutant) | The pollutant to convert |
| `from` | ``"ppb"`` \| ``"ppm"`` \| ``"µg/m³"`` \| ``"particles/cm³"`` \| ``"chnMep"`` \| ``"usaEpa"`` | The type to convert from (either ugm3, or an AQI) |
| `to` | ``"ppb"`` \| ``"ppm"`` \| ``"µg/m³"`` \| ``"particles/cm³"`` \| ``"chnMep"`` \| ``"usaEpa"`` | The type to convert to (either ugm3, or an AQI) |
| `value` | `number` | The value to convert |

#### Returns

`number`

#### Defined in

[convert.ts:15](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/convert.ts#L15)

___

### getPollutantMeta

▸ **getPollutantMeta**(`pollutant`): [`PollutantMeta`](interfaces/PollutantMeta.md)

Get metadata (code, name, description, unit) for a pollutant. This list is fetched from:
https://docs.openaq.org/v2/parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pollutant` | [`Pollutant`](modules.md#pollutant) | The pollutant to get the metadata from. |

#### Returns

[`PollutantMeta`](interfaces/PollutantMeta.md)

#### Defined in

[util/pollutant.ts:102](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/pollutant.ts#L102)

___

### isPollutant

▸ **isPollutant**(`pollutant`): pollutant is Pollutant

Check if the input pollutant is a recognized pollutant which we can convert
AQI to/from concentrations. This list is fetched from:
https://docs.openaq.org/v2/parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pollutant` | `string` | The pollutant to test. |

#### Returns

pollutant is Pollutant

#### Defined in

[util/pollutant.ts:113](https://github.com/shootismoke/common//blob/dff4dfe/packages/convert/src/util/pollutant.ts#L113)
