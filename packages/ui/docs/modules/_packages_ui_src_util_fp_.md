[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/fp"](_packages_ui_src_util_fp_.md)

# Module: "packages/ui/src/util/fp"

## Index

### Interfaces

* [RetryOptions](../interfaces/_packages_ui_src_util_fp_.retryoptions.md)

### Functions

* [promiseToTE](_packages_ui_src_util_fp_.md#promisetote)
* [retry](_packages_ui_src_util_fp_.md#retry)
* [sideEffect](_packages_ui_src_util_fp_.md#sideeffect)

## Functions

###  promiseToTE

▸ **promiseToTE**‹**A**›(`fn`: Lazy‹Promise‹A››): *TaskEither‹Error, A›*

*Defined in [packages/ui/src/util/fp.ts:108](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fp.ts#L108)*

Convert a Promise<A> into a TaskEither<Error, A>.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | Lazy‹Promise‹A›› | Function returning a Promise  |

**Returns:** *TaskEither‹Error, A›*

___

###  retry

▸ **retry**‹**A**›(`teFn`: function, `options`: [RetryOptions](../interfaces/_packages_ui_src_util_fp_.retryoptions.md)): *TaskEither‹Error, A›*

*Defined in [packages/ui/src/util/fp.ts:76](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fp.ts#L76)*

Retry a TaskEither.

**Type parameters:**

▪ **A**

**Parameters:**

▪ **teFn**: *function*

A function returning a TE

▸ (`status`: RetryStatus, `delay`: number): *TaskEither‹Error, A›*

**Parameters:**

Name | Type |
------ | ------ |
`status` | RetryStatus |
`delay` | number |

▪`Default value`  **options**: *[RetryOptions](../interfaces/_packages_ui_src_util_fp_.retryoptions.md)*= {}

**Returns:** *TaskEither‹Error, A›*

___

###  sideEffect

▸ **sideEffect**‹**E**, **A**›(`fn`: function): *(Anonymous function)*

*Defined in [packages/ui/src/util/fp.ts:47](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fp.ts#L47)*

A side-effect in a TaskEither chain: if the TaskEither fails, still return
a TaskEither.Right

**`example`** 
```
function myTe(value: number) { // A TaskEither };

pipe(
  TE.of(1),
  TE.chain(sideEffect(myTe)
)
```

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`input`: A): *TaskEither‹E, void›*

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

**Returns:** *(Anonymous function)*
