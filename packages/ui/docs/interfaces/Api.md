[@shootismoke/ui](../README.md) / [Exports](../modules.md) / Api

# Interface: Api

Api is basically the normalized data from '@shootismoke/dataproviders',
where we make sure to add cigarette conversion. An API is returned only when
there is PM2.5 data (even inacurrate.)

## Table of contents

### Properties

- [pm25](Api.md#pm25)
- [results](Api.md#results)
- [shootismoke](Api.md#shootismoke)

## Properties

### pm25

• **pm25**: `OpenAQResult`

Raw data corresponding to the PM2.5 pollutant.

#### Defined in

[packages/ui/src/util/api.ts:49](https://github.com/shootismoke/common//blob/dff4dfe/packages/ui/src/util/api.ts#L49)

___

### results

• **results**: `OpenAQResults`

All results (normalized) returned by the provider.

#### Defined in

[packages/ui/src/util/api.ts:45](https://github.com/shootismoke/common//blob/dff4dfe/packages/ui/src/util/api.ts#L45)

___

### shootismoke

• **shootismoke**: `Object`

Data used by shootismoke frontends.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dailyCigarettes` | `number` | The amount of cigarettes converted from the PM2.5 level. |
| `distanceToStation` | `number` | The distance to the closest station where PM2.5 level can be measured. |
| `isAccurate` | `boolean` | Whether the pm25 level is accuruate. This happens when the station from which the measurement took place is not too far. |

#### Defined in

[packages/ui/src/util/api.ts:53](https://github.com/shootismoke/common//blob/dff4dfe/packages/ui/src/util/api.ts#L53)
