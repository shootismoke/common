[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/fetchAlgolia

# Module: util/fetchAlgolia

## Table of contents

### Type aliases

- [AlgoliaHit](util_fetchalgolia.md#algoliahit)

### Functions

- [fetchAlgolia](util_fetchalgolia.md#fetchalgolia)

## Type aliases

### AlgoliaHit

Ƭ **AlgoliaHit**: *t.TypeOf*<*typeof* AlgoliaHitT\>

Defined in: [packages/ui/src/util/fetchAlgolia.ts:56](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fetchAlgolia.ts#L56)

## Functions

### fetchAlgolia

▸ **fetchAlgolia**(`search`: *string*, `gps?`: LatLng): *TE.TaskEither*<Error, [*AlgoliaHit*](util_fetchalgolia.md#algoliahit)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`search` | *string* |
`gps?` | LatLng |

**Returns:** *TE.TaskEither*<Error, [*AlgoliaHit*](util_fetchalgolia.md#algoliahit)[]\>

Defined in: [packages/ui/src/util/fetchAlgolia.ts:64](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fetchAlgolia.ts#L64)
