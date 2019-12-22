[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["providers/waqi/validation"](_providers_waqi_validation_.md)

# External module: "providers/waqi/validation"

## Index

### Type aliases

* [ByStation](_providers_waqi_validation_.md#bystation)

### Variables

* [ByStationCodec](_providers_waqi_validation_.md#const-bystationcodec)

## Type aliases

###  ByStation

Ƭ **ByStation**: *t.TypeOf‹TypeC›*

*Defined in [providers/waqi/validation.ts:43](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/providers/waqi/validation.ts#L43)*

## Variables

### `Const` ByStationCodec

• **ByStationCodec**: *TypeC‹object›* =  t.type({
  d: t.array(
    t.type({
      d: t.number,
      geo: t.tuple([t.number, t.number]),
      key: t.string,
      nlo: t.string,
      nna: t.string,
      pol: t.string,
      t: t.number,
      u: t.string,
      v: t.string,
      x: t.string
    })
  ),
  g: t.any
})

*Defined in [providers/waqi/validation.ts:25](https://github.com/shootismoke/common/blob/5e67d25/packages/dataproviders/src/providers/waqi/validation.ts#L25)*
