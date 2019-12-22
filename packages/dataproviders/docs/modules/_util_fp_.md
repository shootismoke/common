[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["util/fp"](_util_fp_.md)

# External module: "util/fp"

## Index

### Functions

* [promiseToTE](_util_fp_.md#promisetote)
* [teToPromise](_util_fp_.md#tetopromise)

## Functions

###  promiseToTE

▸ **promiseToTE**<**A**>(`fn`: Lazy‹Promise‹A››): *TaskEither‹Error, A›*

*Defined in [util/fp.ts:11](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/util/fp.ts#L11)*

Convert a Promise<A> into a TaskEither<Error, A>

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | Lazy‹Promise‹A›› | Function returning a Promise  |

**Returns:** *TaskEither‹Error, A›*

___

###  teToPromise

▸ **teToPromise**<**A**>(`te`: TaskEither‹Error, A›): *Promise‹A›*

*Defined in [util/fp.ts:24](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/util/fp.ts#L24)*

Convert a TaskEither<Error, A> into a Promise<A>

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`te` | TaskEither‹Error, A› |

**Returns:** *Promise‹A›*
