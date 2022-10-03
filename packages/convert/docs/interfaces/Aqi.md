[@shootismoke/convert](../README.md) / [Exports](../modules.md) / Aqi

# Interface: Aqi

An interface to represent an AQI

## Table of contents

### Properties

- [displayName](Aqi.md#displayname)
- [pollutants](Aqi.md#pollutants)
- [range](Aqi.md#range)

### Methods

- [fromUgm3](Aqi.md#fromugm3)
- [toUgm3](Aqi.md#tougm3)

## Properties

### displayName

• **displayName**: `string`

#### Defined in

[types.ts:8](https://github.com/shootismoke/common//blob/a593a9f/packages/convert/src/types.ts#L8)

___

### pollutants

• **pollutants**: [`Pollutant`](../modules.md#pollutant)[]

#### Defined in

[types.ts:10](https://github.com/shootismoke/common//blob/a593a9f/packages/convert/src/types.ts#L10)

___

### range

• **range**: [`number`, `number`]

#### Defined in

[types.ts:11](https://github.com/shootismoke/common//blob/a593a9f/packages/convert/src/types.ts#L11)

## Methods

### fromUgm3

▸ **fromUgm3**(`pollutant`, `ugm3`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pollutant` | [`Pollutant`](../modules.md#pollutant) |
| `ugm3` | `number` |

#### Returns

`number`

#### Defined in

[types.ts:9](https://github.com/shootismoke/common//blob/a593a9f/packages/convert/src/types.ts#L9)

___

### toUgm3

▸ **toUgm3**(`pollutant`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pollutant` | [`Pollutant`](../modules.md#pollutant) |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[types.ts:12](https://github.com/shootismoke/common//blob/a593a9f/packages/convert/src/types.ts#L12)
