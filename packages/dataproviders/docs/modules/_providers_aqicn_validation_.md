[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["providers/aqicn/validation"](_providers_aqicn_validation_.md)

# External module: "providers/aqicn/validation"

## Index

### Type aliases

* [ByStation](_providers_aqicn_validation_.md#bystation)

### Variables

* [ByStationCodec](_providers_aqicn_validation_.md#const-bystationcodec)

## Type aliases

###  ByStation

Ƭ **ByStation**: *t.TypeOf‹TypeC›*

*Defined in [providers/aqicn/validation.ts:110](https://github.com/shootismoke/common/blob/eaab9f5/packages/dataproviders/src/providers/aqicn/validation.ts#L110)*

## Variables

### `Const` ByStationCodec

• **ByStationCodec**: *TypeC‹object›* =  t.type({
  status: t.keyof({
    ok: null,
    error: null,
    nope: null // http://api.waqi.info/feed/geo:31.54;84.3/?token=
  }),
  data: t.union([AqicnStationCodecData, t.string, t.undefined]),
  msg: t.union([t.string, t.undefined])
})

*Defined in [providers/aqicn/validation.ts:100](https://github.com/shootismoke/common/blob/eaab9f5/packages/dataproviders/src/providers/aqicn/validation.ts#L100)*
