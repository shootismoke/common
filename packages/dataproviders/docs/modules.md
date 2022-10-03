[@shootismoke/dataproviders](README.md) / Exports

# @shootismoke/dataproviders

## Table of contents

### Interfaces

- [LatLng](interfaces/LatLng.md)
- [OpenAQResult](interfaces/OpenAQResult.md)
- [Provider](interfaces/Provider.md)

### Type Aliases

- [OpenAQError](modules.md#openaqerror)
- [OpenAQResults](modules.md#openaqresults)

### Variables

- [OpenAQCodec](modules.md#openaqcodec)
- [OpenAQErrorCodec](modules.md#openaqerrorcodec)
- [aqicn](modules.md#aqicn)
- [openaq](modules.md#openaq)
- [unitCodec](modules.md#unitcodec)
- [waqi](modules.md#waqi)

### Functions

- [eitherToFunction](modules.md#eithertofunction)
- [promiseToTE](modules.md#promisetote)
- [teToPromise](modules.md#tetopromise)

## Type Aliases

### OpenAQError

Ƭ **OpenAQError**: `t.TypeOf`<typeof [`OpenAQErrorCodec`](modules.md#openaqerrorcodec)\>

Type of the v2 OpenAQ error format.

#### Defined in

[packages/dataproviders/src/util/openaq.ts:155](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L155)

___

### OpenAQResults

Ƭ **OpenAQResults**: `ArrayOneOrMore`<[`OpenAQResult`](interfaces/OpenAQResult.md)\>

Normalized response from all data providers. We guarantee that normalized
results have at least one element, in the openaq-data-format.

#### Defined in

[packages/dataproviders/src/types.ts:19](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/types.ts#L19)

## Variables

### OpenAQCodec

• `Const` **OpenAQCodec**: `IntersectionC`<[`TypeC`<{ `country`: `StringC` = t.string; `date`: `TypeC`<{ `local`: `StringC` = t.string; `utc`: `StringC` = t.string }\> ; `location`: `StringC` = t.string; `parameter`: `UnionC`<[`Mixed`, `Mixed`, ...Mixed[]]\> = pollutantCodec; `unit`: `UnionC`<[`Mixed`, `Mixed`, ...Mixed[]]\> = unitCodec; `value`: `NumberC` = t.number }\>, `PartialC`<{ `attribution`: `UnionC`<[`ArrayC`<`IntersectionC`<[`TypeC`<{ `name`: `StringC` = t.string }\>, `PartialC`<{ `url`: `StringC` = t.string }\>]\>\>, `NullC`]\> = attributionsCodec; `averagingPeriod`: `TypeC`<{ `unit`: `StringC` = t.string; `value`: `UnionC`<[`NumberC`, `NullC`]\>  }\> ; `city`: `UnionC`<[`StringC`, `NullC`]\> ; `coordinates`: `UnionC`<[`TypeC`<{ `latitude`: `NumberC` = t.number; `longitude`: `NumberC` = t.number }\>, `NullC`]\> = latLngCodec; `entity`: `UnionC`<[`LiteralC`<``"community"``\>, `LiteralC`<``"government"``\>, `LiteralC`<``"research"``\>, `LiteralC`<``"other"``\>]\> = entityCodec; `isAnalysis`: `BooleanC` = t.boolean; `isMobile`: `BooleanC` = t.boolean; `sensorType`: `StringC` = t.string; `sourceName`: `StringC` = t.string }\>]\>

An io-ts codec to validate the v2 OpenAQ data format.

This is empirical! It is gathered from looking at multiple endpoints.

**`See`**

https://github.com/openaq/openaq-data-format

#### Defined in

[packages/dataproviders/src/util/openaq.ts:106](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L106)

___

### OpenAQErrorCodec

• `Const` **OpenAQErrorCodec**: `UnionC`<[`TypeC`<{ `detail`: `ArrayC`<`TypeC`<{ `loc`: `ArrayC`<`StringC`\> ; `msg`: `StringC` = t.string; `type`: `StringC` = t.string }\>\>  }\>, `StringC`]\>

An io-ts codec to validate the v2 OpenAQ error format.

#### Defined in

[packages/dataproviders/src/util/openaq.ts:145](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L145)

___

### aqicn

• `Const` **aqicn**: [`Provider`](interfaces/Provider.md)<`undefined` \| `string` \| {}, `undefined` \| `string` \| {}, `AqicnOptions`\>

#### Defined in

[packages/dataproviders/src/promise.ts:48](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L48)

___

### openaq

• `Const` **openaq**: [`Provider`](interfaces/Provider.md)<{}, {}, `OpenAQOptions`\>

#### Defined in

[packages/dataproviders/src/promise.ts:49](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L49)

___

### unitCodec

• `Const` **unitCodec**: `UnionC`<[`Mixed`, `Mixed`, ...Mixed[]]\>

**`Ignores`**

#### Defined in

[packages/dataproviders/src/util/openaq.ts:44](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/openaq.ts#L44)

___

### waqi

• `Const` **waqi**: [`Provider`](interfaces/Provider.md)<{}, {}, `unknown`\>

#### Defined in

[packages/dataproviders/src/promise.ts:50](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/promise.ts#L50)

## Functions

### eitherToFunction

▸ **eitherToFunction**<`A`\>(`e`): `A`

Convert an Either<Error, A> into a A, or throw if error

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Either`<`Error`, `A`\> |

#### Returns

`A`

#### Defined in

[packages/dataproviders/src/util/fp.ts:53](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/fp.ts#L53)

___

### promiseToTE

▸ **promiseToTE**<`A`\>(`fn`): `TE.TaskEither`<`Error`, `A`\>

Convert a Promise<A> into a TaskEither<Error, A>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Lazy`<`Promise`<`A`\>\> | Function returning a Promise |

#### Returns

`TE.TaskEither`<`Error`, `A`\>

#### Defined in

[packages/dataproviders/src/util/fp.ts:16](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/fp.ts#L16)

___

### teToPromise

▸ **teToPromise**<`A`\>(`te`): `Promise`<`A`\>

Convert a TaskEither<Error, A> into a Promise<A>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `te` | `TaskEither`<`Error`, `A`\> |

#### Returns

`Promise`<`A`\>

#### Defined in

[packages/dataproviders/src/util/fp.ts:30](https://github.com/shootismoke/common//blob/dff4dfe/packages/dataproviders/src/util/fp.ts#L30)
