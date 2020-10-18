[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/api"](../modules/_packages_ui_src_util_api_.md) › [Api](_packages_ui_src_util_api_.api.md)

# Interface: Api

Api is basically the normalized data from '@shootismoke/dataproviders',
where we make sure to add cigarette conversion. An API is returned only when
there is PM2.5 data (even inacurrate.)

## Hierarchy

* **Api**

## Index

### Properties

* [normalized](_packages_ui_src_util_api_.api.md#normalized)
* [pm25](_packages_ui_src_util_api_.api.md#pm25)
* [shootismoke](_packages_ui_src_util_api_.api.md#shootismoke)

## Properties

###  normalized

• **normalized**: *[Normalized](../modules/_packages_dataproviders_src_types_.md#normalized)*

*Defined in [packages/ui/src/util/api.ts:28](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/api.ts#L28)*

All normalized data returned by the provider.

___

###  pm25

• **pm25**: *[OpenAQFormat](../modules/_packages_dataproviders_src_util_openaq_.md#openaqformat)*

*Defined in [packages/ui/src/util/api.ts:32](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/api.ts#L32)*

Raw data corresponding to the PM2.5 pollutant.

___

###  shootismoke

• **shootismoke**: *object*

*Defined in [packages/ui/src/util/api.ts:36](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/api.ts#L36)*

Data used by shootismoke frontends.

#### Type declaration:

* **dailyCigarettes**: *number*

* **distanceToStation**: *number*

* **isAccurate**: *boolean*
