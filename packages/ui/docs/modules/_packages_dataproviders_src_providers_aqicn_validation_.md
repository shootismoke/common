[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/aqicn/validation"](_packages_dataproviders_src_providers_aqicn_validation_.md)

# Module: "packages/dataproviders/src/providers/aqicn/validation"

## Index

### Type aliases

* [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)

### Variables

* [AqicnStationCodecData](_packages_dataproviders_src_providers_aqicn_validation_.md#const-aqicnstationcodecdata)
* [ByStationCodec](_packages_dataproviders_src_providers_aqicn_validation_.md#const-bystationcodec)
* [pollutantValue](_packages_dataproviders_src_providers_aqicn_validation_.md#const-pollutantvalue)
* [pollutants](_packages_dataproviders_src_providers_aqicn_validation_.md#const-pollutants)

## Type aliases

###  ByStation

Ƭ **ByStation**: *t.TypeOf‹typeof AqicnStationCodecData›*

*Defined in [packages/dataproviders/src/providers/aqicn/validation.ts:110](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/aqicn/validation.ts#L110)*

## Variables

### `Const` AqicnStationCodecData

• **AqicnStationCodecData**: *TypeC‹object›* = t.type({
	attributions: attributionsCodec,
	city: t.type({
		geo: t.union([
			t.tuple([
				// Somehow, we also sometimes get strings as geo lat/lng
				t.union([t.string, t.number]),
				t.union([t.string, t.number]),
			]),
			// We also could get null
			t.null,
		]),
		name: t.union([t.string, t.undefined]),
		url: t.union([t.string, t.undefined]),
	}),
	// Should be `t.keyof(pollutants.props)`, but sometimes we do get "" or undefined
	dominentpol: t.union([t.string, t.undefined]),
	// All pollutants
	iaqi: t.union([pollutants, t.undefined]),
	// Station ID
	idx: t.number,
	time: t.type({
		// As string
		s: t.union([t.string, t.undefined]),
		// Timezone
		tz: t.union([t.string, t.undefined]),
		// As timestamp
		v: t.number,
	}),
})

*Defined in [packages/dataproviders/src/providers/aqicn/validation.ts:69](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/aqicn/validation.ts#L69)*

___

### `Const` ByStationCodec

• **ByStationCodec**: *TypeC‹object›* = t.type({
	status: t.keyof({
		ok: null,
		error: null,
		nope: null, // http://api.waqi.info/feed/geo:31.54;84.3/?token=
	}),
	data: t.union([AqicnStationCodecData, t.string, t.undefined]),
	msg: t.union([t.string, t.undefined]),
})

*Defined in [packages/dataproviders/src/providers/aqicn/validation.ts:100](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/aqicn/validation.ts#L100)*

___

### `Const` pollutantValue

• **pollutantValue**: *TypeC‹object›* = t.type({
	v: t.number,
})

*Defined in [packages/dataproviders/src/providers/aqicn/validation.ts:61](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/aqicn/validation.ts#L61)*

___

### `Const` pollutants

• **pollutants**: *RecordC‹StringC‹›, TypeC‹object››* = t.record(t.string, pollutantValue)

*Defined in [packages/dataproviders/src/providers/aqicn/validation.ts:67](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/aqicn/validation.ts#L67)*
