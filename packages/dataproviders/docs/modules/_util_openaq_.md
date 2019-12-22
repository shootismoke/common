[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["util/openaq"](_util_openaq_.md)

# External module: "util/openaq"

## Index

### Type aliases

* [OpenAQ](_util_openaq_.md#openaq)

### Variables

* [OpenAQCodec](_util_openaq_.md#const-openaqcodec)
* [attributionsCodec](_util_openaq_.md#const-attributionscodec)
* [latLngCodec](_util_openaq_.md#const-latlngcodec)
* [pollutantCodec](_util_openaq_.md#const-pollutantcodec)
* [sourceTypeCodec](_util_openaq_.md#const-sourcetypecodec)
* [unitCodec](_util_openaq_.md#const-unitcodec)

## Type aliases

###  OpenAQ

Ƭ **OpenAQ**: *t.TypeOf‹IntersectionC›*

*Defined in [util/openaq.ts:80](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L80)*

**`see`** https://github.com/openaq/openaq-data-format

## Variables

### `Const` OpenAQCodec

• **OpenAQCodec**: *IntersectionC‹[TypeC‹object›, PartialC‹object›]›* =  t.intersection([required, optional])

*Defined in [util/openaq.ts:75](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L75)*

**`see`** https://github.com/openaq/openaq-data-format

___

### `Const` attributionsCodec

• **attributionsCodec**: *ArrayC‹TypeC‹object››* =  t.array(
  t.type({
    name: t.string,
    url: t.union([t.string, t.undefined])
  })
)

*Defined in [util/openaq.ts:3](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L3)*

___

### `Const` latLngCodec

• **latLngCodec**: *TypeC‹object›* =  t.type({
  latitude: t.number,
  longitude: t.number
})

*Defined in [util/openaq.ts:10](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L10)*

___

### `Const` pollutantCodec

• **pollutantCodec**: *UnionC‹[LiteralC‹"co"›, LiteralC‹"c6h6"›, LiteralC‹"ox"›, LiteralC‹"nh3"›, LiteralC‹"nmhc"›, LiteralC‹"no"›, LiteralC‹"nox"›, LiteralC‹"no2"›, LiteralC‹"o3"›, LiteralC‹"pm10"›, LiteralC‹"pm25"›, LiteralC‹"so2"›, LiteralC‹"trs"›]›* =  t.union([
  // Instead of rewriting these, can we use the types and array defined in
  // import { AllPollutants, Pollutant } from '@shootismoke/convert';
  t.literal('co'),
  t.literal('c6h6'),
  t.literal('ox'),
  t.literal('nh3'),
  t.literal('nmhc'),
  t.literal('no'),
  t.literal('nox'),
  t.literal('no2'),
  t.literal('o3'),
  t.literal('pm10'),
  t.literal('pm25'),
  t.literal('so2'),
  t.literal('trs')
])

*Defined in [util/openaq.ts:15](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L15)*

___

### `Const` sourceTypeCodec

• **sourceTypeCodec**: *UnionC‹[LiteralC‹"government"›, LiteralC‹"research"›, LiteralC‹"other"›]›* =  t.union([
  t.literal('government'),
  t.literal('research'),
  t.literal('other')
])

*Defined in [util/openaq.ts:39](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L39)*

___

### `Const` unitCodec

• **unitCodec**: *UnionC‹[LiteralC‹"ppb"›, LiteralC‹"ppm"›, LiteralC‹"µg/m³"›]›* =  t.union([
  t.literal('ppb'),
  t.literal('ppm'),
  t.literal('µg/m³')
])

*Defined in [util/openaq.ts:33](https://github.com/shootismoke/common/blob/0ff5619/packages/dataproviders/src/util/openaq.ts#L33)*
