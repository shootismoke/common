[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["util/codec"](_util_codec_.md)

# External module: "util/codec"

## Index

### Functions

* [decodeWith](_util_codec_.md#decodewith)

## Functions

###  decodeWith

▸ **decodeWith**<**A**, **O**, **I**>(`codec`: Type‹A, O, I›): *function*

*Defined in [util/codec.ts:12](https://github.com/shootismoke/common/blob/eaab9f5/packages/dataproviders/src/util/codec.ts#L12)*

Decode, and return an Error on failure

**Type parameters:**

▪ **A**

▪ **O**

▪ **I**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`codec` | Type‹A, O, I› | Codec used to decode  |

**Returns:** *function*

▸ (`response`: I): *TaskEither‹Error, A›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | I |
