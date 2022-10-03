[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / OpenAQResult

# Interface: OpenAQResult

A TypeScript type to represent the OpenAQ data format.

This is empirical! It is gathered from looking at multiple endpoints.

**`See`**

https://github.com/openaq/openaq-data-format

## Hierarchy

- `OpenAQResultBase`

  ↳ **`OpenAQResult`**

## Table of contents

### Properties

- [attribution](OpenAQResult.md#attribution)
- [averagingPeriod](OpenAQResult.md#averagingperiod)
- [city](OpenAQResult.md#city)
- [coordinates](OpenAQResult.md#coordinates)
- [country](OpenAQResult.md#country)
- [date](OpenAQResult.md#date)
- [entity](OpenAQResult.md#entity)
- [isAnalysis](OpenAQResult.md#isanalysis)
- [isMobile](OpenAQResult.md#ismobile)
- [location](OpenAQResult.md#location)
- [parameter](OpenAQResult.md#parameter)
- [sensorType](OpenAQResult.md#sensortype)
- [sourceName](OpenAQResult.md#sourcename)
- [unit](OpenAQResult.md#unit)
- [value](OpenAQResult.md#value)

## Properties

### attribution

• **attribution**: `undefined` \| ``null`` \| { `name`: `string` = t.string } & { `url`: `undefined` \| `string` = t.string }[] = `attributionsCodec`

#### Inherited from

OpenAQResultBase.attribution

#### Defined in

[packages/dataproviders/src/util/openaq.ts:86](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L86)

___

### averagingPeriod

• **averagingPeriod**: `undefined` \| { `unit`: `string` = t.string; `value`: ``null`` \| `number`  }

#### Inherited from

OpenAQResultBase.averagingPeriod

#### Defined in

[packages/dataproviders/src/util/openaq.ts:87](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L87)

___

### city

• **city**: `undefined` \| ``null`` \| `string`

#### Inherited from

OpenAQResultBase.city

#### Defined in

[packages/dataproviders/src/util/openaq.ts:91](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L91)

___

### coordinates

• **coordinates**: `undefined` \| ``null`` \| { `latitude`: `number` = t.number; `longitude`: `number` = t.number } = `latLngCodec`

#### Inherited from

OpenAQResultBase.coordinates

#### Defined in

[packages/dataproviders/src/util/openaq.ts:92](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L92)

___

### country

• **country**: `string` = `t.string`

#### Inherited from

OpenAQResultBase.country

#### Defined in

[packages/dataproviders/src/util/openaq.ts:67](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L67)

___

### date

• **date**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `local` | `string` |
| `utc` | `string` |

#### Inherited from

OpenAQResultBase.date

#### Defined in

[packages/dataproviders/src/util/openaq.ts:68](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L68)

___

### entity

• **entity**: `undefined` \| ``"community"`` \| ``"government"`` \| ``"research"`` \| ``"other"`` = `entityCodec`

#### Inherited from

OpenAQResultBase.entity

#### Defined in

[packages/dataproviders/src/util/openaq.ts:93](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L93)

___

### isAnalysis

• **isAnalysis**: `undefined` \| `boolean` = `t.boolean`

#### Inherited from

OpenAQResultBase.isAnalysis

#### Defined in

[packages/dataproviders/src/util/openaq.ts:94](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L94)

___

### isMobile

• **isMobile**: `undefined` \| `boolean` = `t.boolean`

#### Inherited from

OpenAQResultBase.isMobile

#### Defined in

[packages/dataproviders/src/util/openaq.ts:95](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L95)

___

### location

• **location**: `string` = `t.string`

#### Inherited from

OpenAQResultBase.location

#### Defined in

[packages/dataproviders/src/util/openaq.ts:72](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L72)

___

### parameter

• **parameter**: `Pollutant`

#### Overrides

OpenAQResultBase.parameter

#### Defined in

[packages/dataproviders/src/util/openaq.ts:122](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L122)

___

### sensorType

• **sensorType**: `undefined` \| `string` = `t.string`

#### Inherited from

OpenAQResultBase.sensorType

#### Defined in

[packages/dataproviders/src/util/openaq.ts:97](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L97)

___

### sourceName

• **sourceName**: `undefined` \| `string` = `t.string`

#### Inherited from

OpenAQResultBase.sourceName

#### Defined in

[packages/dataproviders/src/util/openaq.ts:96](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L96)

___

### unit

• **unit**: `Unit`

#### Overrides

OpenAQResultBase.unit

#### Defined in

[packages/dataproviders/src/util/openaq.ts:123](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L123)

___

### value

• **value**: `number` = `t.number`

#### Inherited from

OpenAQResultBase.value

#### Defined in

[packages/dataproviders/src/util/openaq.ts:74](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L74)
