[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/waqi/validation"](_packages_dataproviders_src_providers_waqi_validation_.md)

# Module: "packages/dataproviders/src/providers/waqi/validation"

## Index

### Type aliases

* [ByStation](_packages_dataproviders_src_providers_waqi_validation_.md#bystation)

### Variables

* [ByStationCodec](_packages_dataproviders_src_providers_waqi_validation_.md#const-bystationcodec)

## Type aliases

###  ByStation

Ƭ **ByStation**: *t.TypeOf‹typeof ByStationCodec›*

*Defined in [packages/dataproviders/src/providers/waqi/validation.ts:43](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/waqi/validation.ts#L43)*

## Variables

### `Const` ByStationCodec

• **ByStationCodec**: *TypeC‹object›* = t.type({
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
			x: t.string,
		})
	),
	g: t.any,
})

*Defined in [packages/dataproviders/src/providers/waqi/validation.ts:25](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/waqi/validation.ts#L25)*
