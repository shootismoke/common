[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/fetchAlgolia"](_packages_ui_src_util_fetchalgolia_.md)

# Module: "packages/ui/src/util/fetchAlgolia"

## Index

### Type aliases

* [AlgoliaHit](_packages_ui_src_util_fetchalgolia_.md#algoliahit)

### Variables

* [AlgoliaHitT](_packages_ui_src_util_fetchalgolia_.md#const-algoliahitt)
* [AxiosResponseT](_packages_ui_src_util_fetchalgolia_.md#const-axiosresponset)
* [algoliaUrls](_packages_ui_src_util_fetchalgolia_.md#const-algoliaurls)

### Functions

* [fetchAlgolia](_packages_ui_src_util_fetchalgolia_.md#fetchalgolia)

## Type aliases

###  AlgoliaHit

Ƭ **AlgoliaHit**: *t.TypeOf‹typeof AlgoliaHitT›*

*Defined in [packages/ui/src/util/fetchAlgolia.ts:56](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fetchAlgolia.ts#L56)*

## Variables

### `Const` AlgoliaHitT

• **AlgoliaHitT**: *ExactC‹IntersectionC‹[TypeC‹object›, PartialC‹object›]››* = t.exact(
	t.intersection([
		t.type({
			_geoloc: t.type({
				lat: t.number,
				lng: t.number,
			}),
			country: t.string,
			// eslint-disable-next-line
			locale_names: t.array(t.string),
			objectID: t.string,
		}),
		t.partial({
			city: t.array(t.string),
			county: t.array(t.string),
		}),
	])
)

*Defined in [packages/ui/src/util/fetchAlgolia.ts:38](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fetchAlgolia.ts#L38)*

___

### `Const` AxiosResponseT

• **AxiosResponseT**: *TypeC‹object›* = t.type({
	data: t.type({
		hits: t.array(AlgoliaHitT),
	}),
})

*Defined in [packages/ui/src/util/fetchAlgolia.ts:58](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fetchAlgolia.ts#L58)*

___

### `Const` algoliaUrls

• **algoliaUrls**: *string[]* = [
	'https://places-dsn.algolia.net',
	'https://places-1.algolianet.com',
	'https://places-2.algolianet.com',
	'https://places-3.algolianet.com',
]

*Defined in [packages/ui/src/util/fetchAlgolia.ts:30](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fetchAlgolia.ts#L30)*

## Functions

###  fetchAlgolia

▸ **fetchAlgolia**(`search`: string, `gps?`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)): *TaskEither‹Error, [AlgoliaHit](_packages_ui_src_util_fetchalgolia_.md#algoliahit)[]›*

*Defined in [packages/ui/src/util/fetchAlgolia.ts:64](https://github.com/shootismoke/common/blob/af8195a/packages/ui/src/util/fetchAlgolia.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`search` | string |
`gps?` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) |

**Returns:** *TaskEither‹Error, [AlgoliaHit](_packages_ui_src_util_fetchalgolia_.md#algoliahit)[]›*
