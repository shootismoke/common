[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/util/openaq"](_packages_dataproviders_src_util_openaq_.md)

# Module: "packages/dataproviders/src/util/openaq"

## Index

### Type aliases

* [OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat)

### Variables

* [OpenAQCodec](_packages_dataproviders_src_util_openaq_.md#const-openaqcodec)
* [OpenAQCodecOptional](_packages_dataproviders_src_util_openaq_.md#const-openaqcodecoptional)

## Type aliases

###  OpenAQFormat

Ƭ **OpenAQFormat**: *t.TypeOf‹typeof OpenAQCodec›*

*Defined in [packages/dataproviders/src/util/openaq.ts:112](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/util/openaq.ts#L112)*

A TypeScript type to represent the OpenAQ data format.

**`see`** https://github.com/openaq/openaq-data-format

## Variables

### `Const` OpenAQCodec

• **OpenAQCodec**: *IntersectionC‹[TypeC‹object›, PartialC‹object›]›* = t.intersection([
	OpenAQCodecRequired,
	OpenAQCodecOptional,
])

*Defined in [packages/dataproviders/src/util/openaq.ts:102](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/util/openaq.ts#L102)*

An io-ts codec to validate the OpenAQ data format.

**`see`** https://github.com/openaq/openaq-data-format

___

### `Const` OpenAQCodecOptional

• **OpenAQCodecOptional**: *PartialC‹object›* = t.partial({
	attribution: attributionsCodec,
	averagingPeriod: t.type({
		unit: t.string,
		value: t.number,
	}),
	mobile: t.boolean,
	sourceType: sourceTypeCodec,
})

*Defined in [packages/dataproviders/src/util/openaq.ts:87](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/util/openaq.ts#L87)*
