[@shootismoke/convert - v0.2.0](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Aqi](_types_.aqi.md)

# Interface: Aqi

An interface to represent an AQI

## Hierarchy

* **Aqi**

## Index

### Properties

* [displayName](_types_.aqi.md#displayname)
* [pollutants](_types_.aqi.md#pollutants)
* [range](_types_.aqi.md#range)

### Methods

* [fromRaw](_types_.aqi.md#fromraw)
* [toRaw](_types_.aqi.md#toraw)

## Properties

###  displayName

• **displayName**: *string*

*Defined in [types.ts:8](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/types.ts#L8)*

___

###  pollutants

• **pollutants**: *[Pollutant](../modules/_util_pollutant_.md#pollutant)[]*

*Defined in [types.ts:10](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/types.ts#L10)*

___

###  range

• **range**: *[number, number]*

*Defined in [types.ts:11](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/types.ts#L11)*

## Methods

###  fromRaw

▸ **fromRaw**(`pollutant`: [Pollutant](../modules/_util_pollutant_.md#pollutant), `raw`: number): *number*

*Defined in [types.ts:9](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/types.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`pollutant` | [Pollutant](../modules/_util_pollutant_.md#pollutant) |
`raw` | number |

**Returns:** *number*

___

###  toRaw

▸ **toRaw**(`pollutant`: [Pollutant](../modules/_util_pollutant_.md#pollutant), `value`: number): *number*

*Defined in [types.ts:12](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/types.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`pollutant` | [Pollutant](../modules/_util_pollutant_.md#pollutant) |
`value` | number |

**Returns:** *number*
