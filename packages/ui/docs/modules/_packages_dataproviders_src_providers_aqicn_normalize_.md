[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/aqicn/normalize"](_packages_dataproviders_src_providers_aqicn_normalize_.md)

# Module: "packages/dataproviders/src/providers/aqicn/normalize"

## Index

### Functions

* [normalize](_packages_dataproviders_src_providers_aqicn_normalize_.md#normalize)
* [sanitizeCountry](_packages_dataproviders_src_providers_aqicn_normalize_.md#sanitizecountry)

## Functions

###  normalize

▸ **normalize**(`data`: [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)): *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*

*Defined in [packages/dataproviders/src/providers/aqicn/normalize.ts:39](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/aqicn/normalize.ts#L39)*

Normalize aqicn byGps data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation) | The data to normalize  |

**Returns:** *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*

___

###  sanitizeCountry

▸ **sanitizeCountry**(`input`: string): *string*

*Defined in [packages/dataproviders/src/providers/aqicn/normalize.ts:23](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/aqicn/normalize.ts#L23)*

Sanitize the country we get here from aqicn. For example, for China, the
string after 'https://aqicn.org/city/' is not 'china', but directly the
Chinese privince, e.g. 'jiangsu'. In this case, we map directly to China.
See sanitized.json for some other sanitazations, these are empirical, so
we add them as we discover them.

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *string*
