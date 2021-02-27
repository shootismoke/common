[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/fp

# Module: util/fp

## Table of contents

### References

- [promiseToTE](util_fp.md#promisetote)

### Interfaces

- [RetryOptions](../interfaces/util_fp.retryoptions.md)

### Functions

- [retry](util_fp.md#retry)
- [sideEffect](util_fp.md#sideeffect)

## References

### promiseToTE

Re-exports: [promiseToTE](index.md#promisetote)

## Functions

### retry

▸ **retry**<A\>(`teFn`: (`status`: RetryStatus, `delay`: *number*) => *TE.TaskEither*<Error, A\>, `options?`: [*RetryOptions*](../interfaces/util_fp.retryoptions.md)): *TE.TaskEither*<Error, A\>

Retry a TaskEither.

#### Type parameters:

Name |
:------ |
`A` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teFn` | (`status`: RetryStatus, `delay`: *number*) => *TE.TaskEither*<Error, A\> | A function returning a TE    |
`options` | [*RetryOptions*](../interfaces/util_fp.retryoptions.md) | - |

**Returns:** *TE.TaskEither*<Error, A\>

Defined in: [packages/ui/src/util/fp.ts:76](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fp.ts#L76)

___

### sideEffect

▸ **sideEffect**<E, A\>(`fn`: (`input`: A) => *TE.TaskEither*<E, void\>): (`input`: A) => *TaskEither*<E, A\>

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

#### Type parameters:

Name |
:------ |
`E` |
`A` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`input`: A) => *TE.TaskEither*<E, void\> |

**Returns:** *function*

Defined in: [packages/ui/src/util/fp.ts:47](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fp.ts#L47)
