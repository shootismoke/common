[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / util/openaq

# Module: util/openaq

## Table of contents

### Type aliases

- [OpenAQError](util_openaq.md#openaqerror)
- [OpenAQResult](util_openaq.md#openaqresult)

### Variables

- [OpenAQCodec](util_openaq.md#openaqcodec)
- [OpenAQErrorCodec](util_openaq.md#openaqerrorcodec)

## Type aliases

### OpenAQError

Ƭ **OpenAQError**: *t.TypeOf*<*typeof* [*OpenAQErrorCodec*](util_openaq.md#openaqerrorcodec)\>

Type of the v2 OpenAQ error format.

Defined in: [util/openaq.ts:162](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/openaq.ts#L162)

___

### OpenAQResult

Ƭ **OpenAQResult**: *t.TypeOf*<*typeof* [*OpenAQCodec*](util_openaq.md#openaqcodec)\>

A TypeScript type to represent the OpenAQ data format.

This is empirical! It is gathered from looking at multiple endpoints.

**`see`** https://github.com/openaq/openaq-data-format

Defined in: [util/openaq.ts:131](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/openaq.ts#L131)

## Variables

### OpenAQCodec

• `Const` **OpenAQCodec**: *IntersectionC*<[*TypeC*<{ `country`: *StringC* ; `date`: *TypeC*<{ `local`: *StringC* ; `utc`: *StringC*  }\> ; `location`: *StringC* ; `parameter`: *UnionC*<[*LiteralC*<*bc*\>, *LiteralC*<*ch4*\>, *LiteralC*<*co*\>, *LiteralC*<*c6h6*\>, *LiteralC*<*ox*\>, *LiteralC*<*nh3*\>, *LiteralC*<*nmhc*\>, *LiteralC*<*no*\>, *LiteralC*<*nox*\>]\> ; `unit`: *UnionC*<[*LiteralC*<*ppb*\>, *LiteralC*<*ppm*\>, *LiteralC*<*µg/m³*\>]\> ; `value`: *NumberC*  }\>, *PartialC*<{ `attribution`: *UnionC*<[*ArrayC*<IntersectionC<[*TypeC*<{ `name`: *StringC*  }\>, *PartialC*<{ `url`: *StringC*  }\>]\>\>, *NullC*]\> ; `averagingPeriod`: *TypeC*<{ `unit`: *StringC* ; `value`: *UnionC*<[*NumberC*, *NullC*]\>  }\> ; `city`: *UnionC*<[*StringC*, *NullC*]\> ; `coordinates`: *UnionC*<[*TypeC*<{ `latitude`: *NumberC* ; `longitude`: *NumberC*  }\>, *NullC*]\> ; `entity`: *UnionC*<[*LiteralC*<*community*\>, *LiteralC*<*government*\>, *LiteralC*<*research*\>, *LiteralC*<*other*\>]\> ; `isAnalysis`: *BooleanC* ; `isMobile`: *BooleanC* ; `sourceName`: *StringC*  }\>]\>

An io-ts codec to validate the v2 OpenAQ data format.

This is empirical! It is gathered from looking at multiple endpoints.

**`see`** https://github.com/openaq/openaq-data-format

Defined in: [util/openaq.ts:120](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/openaq.ts#L120)

___

### OpenAQErrorCodec

• `Const` **OpenAQErrorCodec**: *UnionC*<[*TypeC*<{ `detail`: *ArrayC*<TypeC<{ `loc`: *ArrayC*<StringC\> ; `msg`: *StringC* ; `type`: *StringC*  }\>\>  }\>, *StringC*]\>

An io-ts codec to validate the v2 OpenAQ error format.

Defined in: [util/openaq.ts:152](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/openaq.ts#L152)
