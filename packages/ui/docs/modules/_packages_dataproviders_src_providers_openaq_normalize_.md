[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/openaq/normalize"](_packages_dataproviders_src_providers_openaq_normalize_.md)

# Module: "packages/dataproviders/src/providers/openaq/normalize"

## Index

### Functions

* [normalizeByGps](_packages_dataproviders_src_providers_openaq_normalize_.md#normalizebygps)
* [normalizeByStation](_packages_dataproviders_src_providers_openaq_normalize_.md#normalizebystation)

## Functions

###  normalizeByGps

▸ **normalizeByGps**(`data`: [OpenAQLatest](_packages_dataproviders_src_providers_openaq_validation_.md#openaqlatest)): *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/dataproviders/src/providers/openaq/normalize.ts:12](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/openaq/normalize.ts#L12)*

Normalize aqicn byGps data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [OpenAQLatest](_packages_dataproviders_src_providers_openaq_validation_.md#openaqlatest) | The data to normalize  |

**Returns:** *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*

___

###  normalizeByStation

▸ **normalizeByStation**(`data`: [OpenAQMeasurements](_packages_dataproviders_src_providers_openaq_validation_.md#openaqmeasurements)): *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/dataproviders/src/providers/openaq/normalize.ts:47](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/providers/openaq/normalize.ts#L47)*

Normalize aqicn byGps data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [OpenAQMeasurements](_packages_dataproviders_src_providers_openaq_validation_.md#openaqmeasurements) | The data to normalize  |

**Returns:** *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*
