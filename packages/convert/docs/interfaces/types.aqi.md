[@shootismoke/convert](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / Aqi

# Interface: Aqi

[types](../modules/types.md).Aqi

An interface to represent an AQI

## Table of contents

### Properties

- [displayName](types.aqi.md#displayname)
- [pollutants](types.aqi.md#pollutants)
- [range](types.aqi.md#range)

### Methods

- [fromUgm3](types.aqi.md#fromugm3)
- [toUgm3](types.aqi.md#tougm3)

## Properties

### displayName

• **displayName**: *string*

Defined in: [types.ts:8](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/types.ts#L8)

___

### pollutants

• **pollutants**: [*Pollutant*](../modules/util_pollutant.md#pollutant)[]

Defined in: [types.ts:10](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/types.ts#L10)

___

### range

• **range**: [*number*, *number*]

Defined in: [types.ts:11](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/types.ts#L11)

## Methods

### fromUgm3

▸ **fromUgm3**(`pollutant`: [*Pollutant*](../modules/util_pollutant.md#pollutant), `ugm3`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`pollutant` | [*Pollutant*](../modules/util_pollutant.md#pollutant) |
`ugm3` | *number* |

**Returns:** *number*

Defined in: [types.ts:9](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/types.ts#L9)

___

### toUgm3

▸ **toUgm3**(`pollutant`: [*Pollutant*](../modules/util_pollutant.md#pollutant), `value`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`pollutant` | [*Pollutant*](../modules/util_pollutant.md#pollutant) |
`value` | *number* |

**Returns:** *number*

Defined in: [types.ts:12](https://github.com/shootismoke/common/blob/1e71707/packages/convert/src/types.ts#L12)
