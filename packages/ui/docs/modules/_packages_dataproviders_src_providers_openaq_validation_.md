[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/openaq/validation"](_packages_dataproviders_src_providers_openaq_validation_.md)

# Module: "packages/dataproviders/src/providers/openaq/validation"

## Index

### Type aliases

* [OpenAQError](_packages_dataproviders_src_providers_openaq_validation_.md#openaqerror)
* [OpenAQLatest](_packages_dataproviders_src_providers_openaq_validation_.md#openaqlatest)
* [OpenAQMeasurements](_packages_dataproviders_src_providers_openaq_validation_.md#openaqmeasurements)

### Variables

* [OpenAQErrorCodec](_packages_dataproviders_src_providers_openaq_validation_.md#const-openaqerrorcodec)
* [OpenAQLatestCodec](_packages_dataproviders_src_providers_openaq_validation_.md#const-openaqlatestcodec)
* [OpenAQMeasurementsCodec](_packages_dataproviders_src_providers_openaq_validation_.md#const-openaqmeasurementscodec)
* [OpenAQMetaCodec](_packages_dataproviders_src_providers_openaq_validation_.md#const-openaqmetacodec)

## Type aliases

###  OpenAQError

Ƭ **OpenAQError**: *t.TypeOf‹typeof OpenAQErrorCodec›*

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:76](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L76)*

___

###  OpenAQLatest

Ƭ **OpenAQLatest**: *t.TypeOf‹typeof OpenAQLatestCodec›*

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:49](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L49)*

___

###  OpenAQMeasurements

Ƭ **OpenAQMeasurements**: *t.TypeOf‹typeof OpenAQMeasurementsCodec›*

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:64](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L64)*

**`see`** https://docs.openaq.org/#api-Measurements

## Variables

### `Const` OpenAQErrorCodec

• **OpenAQErrorCodec**: *TypeC‹object›* = t.type({
	error: t.string,
	message: t.string,
	statusCode: t.number,
	validation: t.type({
		keys: t.record(t.number, t.string),
		source: t.string,
	}),
})

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:66](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L66)*

___

### `Const` OpenAQLatestCodec

• **OpenAQLatestCodec**: *TypeC‹object›* = t.type({
	meta: OpenAQMetaCodec,
	results: t.array(
		t.type({
			city: t.string,
			coordinates: latLngCodec,
			country: t.string,
			location: t.string,
			measurements: t.array(
				t.intersection([
					t.type({
						lastUpdated: t.string,
						parameter: pollutantCodec,
						sourceName: t.string,
						value: t.number,
						unit: unitCodec,
					}),
					OpenAQCodecOptional,
				])
			),
		})
	),
})

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:25](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L25)*

Codec for the /v1/latest endpoint.

**`see`** https://docs.openaq.org/#api-Latest

___

### `Const` OpenAQMeasurementsCodec

• **OpenAQMeasurementsCodec**: *TypeC‹object›* = t.type({
	meta: OpenAQMetaCodec,
	results: t.array(OpenAQCodec),
})

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:56](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L56)*

Codec for the /v1/measurements endpoint.

**`see`** https://docs.openaq.org/#api-Measurements

___

### `Const` OpenAQMetaCodec

• **OpenAQMetaCodec**: *TypeC‹object›* = t.type({
	found: t.number,
	license: t.string,
	limit: t.number,
	name: t.string,
	page: t.number,
	website: t.string,
})

*Defined in [packages/dataproviders/src/providers/openaq/validation.ts:11](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/providers/openaq/validation.ts#L11)*
