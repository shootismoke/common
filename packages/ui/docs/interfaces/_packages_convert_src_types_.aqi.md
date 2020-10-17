[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/convert/src/types"](../modules/_packages_convert_src_types_.md) › [Aqi](_packages_convert_src_types_.aqi.md)

# Interface: Aqi

An interface to represent an AQI

## Hierarchy

* **Aqi**

## Index

### Properties

* [displayName](_packages_convert_src_types_.aqi.md#displayname)
* [pollutants](_packages_convert_src_types_.aqi.md#pollutants)
* [range](_packages_convert_src_types_.aqi.md#range)

### Methods

* [fromRaw](_packages_convert_src_types_.aqi.md#fromraw)
* [toRaw](_packages_convert_src_types_.aqi.md#toraw)

## Properties

###  displayName

• **displayName**: *string*

*Defined in [packages/convert/src/types.ts:8](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/types.ts#L8)*

___

###  pollutants

• **pollutants**: *[Pollutant](../modules/_packages_convert_src_util_pollutant_.md#pollutant)[]*

*Defined in [packages/convert/src/types.ts:10](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/types.ts#L10)*

___

###  range

• **range**: *[number, number]*

*Defined in [packages/convert/src/types.ts:11](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/types.ts#L11)*

## Methods

###  fromRaw

▸ **fromRaw**(`pollutant`: [Pollutant](../modules/_packages_convert_src_util_pollutant_.md#pollutant), `raw`: number): *number*

*Defined in [packages/convert/src/types.ts:9](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/types.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`pollutant` | [Pollutant](../modules/_packages_convert_src_util_pollutant_.md#pollutant) |
`raw` | number |

**Returns:** *number*

___

###  toRaw

▸ **toRaw**(`pollutant`: [Pollutant](../modules/_packages_convert_src_util_pollutant_.md#pollutant), `value`: number): *number*

*Defined in [packages/convert/src/types.ts:12](https://github.com/shootismoke/common/blob/72777b1/packages/convert/src/types.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`pollutant` | [Pollutant](../modules/_packages_convert_src_util_pollutant_.md#pollutant) |
`value` | number |

**Returns:** *number*
