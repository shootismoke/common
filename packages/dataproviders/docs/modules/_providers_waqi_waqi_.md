[@shootismoke/dataproviders - v0.2.3](../README.md) › [Globals](../globals.md) › ["providers/waqi/waqi"](_providers_waqi_waqi_.md)

# External module: "providers/waqi/waqi"

## Index

### Object literals

* [waqi](_providers_waqi_waqi_.md#const-waqi)

## Object literals

### `Const` waqi

### ▪ **waqi**: *object*

*Defined in [providers/waqi/waqi.ts:12](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L12)*

**`see`** https://wind.waqi.info/

###  fetchByGps

• **fetchByGps**: *fetchByGps*

*Defined in [providers/waqi/waqi.ts:13](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L13)*

###  id

• **id**: *string* = "waqi"

*Defined in [providers/waqi/waqi.ts:15](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L15)*

###  name

• **name**: *string* = "WAQI"

*Defined in [providers/waqi/waqi.ts:16](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L16)*

###  normalizeByGps

• **normalizeByGps**: *normalize* =  normalize

*Defined in [providers/waqi/waqi.ts:17](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L17)*

###  fetchByStation

▸ **fetchByStation**(): *TaskEither‹Error, object›*

*Defined in [providers/waqi/waqi.ts:14](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L14)*

**Returns:** *TaskEither‹Error, object›*

###  normalizeByStation

▸ **normalizeByStation**(): *Left‹Error› | Right‹ArrayOneOrMore‹object & object››*

*Defined in [providers/waqi/waqi.ts:18](https://github.com/shootismoke/common/blob/5b392da/packages/dataproviders/src/providers/waqi/waqi.ts#L18)*

**Returns:** *Left‹Error› | Right‹ArrayOneOrMore‹object & object››*
