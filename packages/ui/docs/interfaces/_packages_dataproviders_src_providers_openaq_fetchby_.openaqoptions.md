[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/openaq/fetchBy"](../modules/_packages_dataproviders_src_providers_openaq_fetchby_.md) › [OpenAQOptions](_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md)

# Interface: OpenAQOptions

**`see`** https://docs.openaq.org/#api-Latest

## Hierarchy

* **OpenAQOptions**

## Index

### Properties

* [dateFrom](_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md#optional-datefrom)
* [dateTo](_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md#optional-dateto)
* [includeFields](_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md#optional-includefields)
* [limit](_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md#optional-limit)
* [parameter](_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md#optional-parameter)

## Properties

### `Optional` dateFrom

• **dateFrom**? : *Date*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:26](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/openaq/fetchBy.ts#L26)*

Show results after a certain date. This acts on the utc timestamp of each
measurement.

___

### `Optional` dateTo

• **dateTo**? : *Date*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:30](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/openaq/fetchBy.ts#L30)*

Show results before a certain date. This acts on the utc timestamp of each measurement.

___

### `Optional` includeFields

• **includeFields**? : *string[]*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:34](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/openaq/fetchBy.ts#L34)*

Include extra fields in the output in addition to default values.

___

### `Optional` limit

• **limit**? : *undefined | number*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:39](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/openaq/fetchBy.ts#L39)*

Change the number of results returned, max is 10000.

**`default`** 10

___

### `Optional` parameter

• **parameter**? : *[Pollutant](../modules/_packages_convert_src_util_pollutant_.md#pollutant)[]*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:43](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/openaq/fetchBy.ts#L43)*

Limit to certain one or more parameters.
