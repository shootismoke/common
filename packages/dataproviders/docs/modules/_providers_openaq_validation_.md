[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["providers/openaq/validation"](_providers_openaq_validation_.md)

# External module: "providers/openaq/validation"

## Index

### Type aliases

* [Measurements](_providers_openaq_validation_.md#measurements)

### Variables

* [MeasurementsCodec](_providers_openaq_validation_.md#const-measurementscodec)

## Type aliases

###  Measurements

Ƭ **Measurements**: *t.TypeOf‹TypeC›*

*Defined in [providers/openaq/validation.ts:23](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/providers/openaq/validation.ts#L23)*

**`see`** https://github.com/openaq/openaq-data-format

## Variables

### `Const` MeasurementsCodec

• **MeasurementsCodec**: *TypeC‹object›* =  t.type({
  meta: t.type({
    found: t.number,
    license: t.string,
    limit: t.number,
    name: t.string,
    page: t.number,
    website: t.string
  }),
  results: t.array(OpenAQCodec)
})

*Defined in [providers/openaq/validation.ts:8](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/providers/openaq/validation.ts#L8)*

**`see`** https://github.com/openaq/openaq-data-format
