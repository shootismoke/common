[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/primaryPollutant"](_packages_ui_src_util_primarypollutant_.md)

# Module: "packages/ui/src/util/primaryPollutant"

## Index

### Functions

* [getAQI](_packages_ui_src_util_primarypollutant_.md#getaqi)
* [getSortedNormalized](_packages_ui_src_util_primarypollutant_.md#getsortednormalized)
* [primaryPollutant](_packages_ui_src_util_primarypollutant_.md#primarypollutant)

## Functions

###  getAQI

▸ **getAQI**(`normalized`: [Normalized](_packages_dataproviders_src_types_.md#normalized)): *number*

*Defined in [packages/ui/src/util/primaryPollutant.ts:49](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/primaryPollutant.ts#L49)*

From a set of normalized pollutant data, get the AQI, that is, the AQI of
the primary pollutant.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normalized` | [Normalized](_packages_dataproviders_src_types_.md#normalized) | The normalized data for all pollutants.  |

**Returns:** *number*

___

###  getSortedNormalized

▸ **getSortedNormalized**(`normalized`: [Normalized](_packages_dataproviders_src_types_.md#normalized)): *[OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat)[]*

*Defined in [packages/ui/src/util/primaryPollutant.ts:26](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/primaryPollutant.ts#L26)*

From a set of normalized pollutant data, filter only the ones that can be
converted to USA EPA, and sort the set.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normalized` | [Normalized](_packages_dataproviders_src_types_.md#normalized) | The normalized data for all pollutants.  |

**Returns:** *[OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat)[]*

___

###  primaryPollutant

▸ **primaryPollutant**(`normalized`: [Normalized](_packages_dataproviders_src_types_.md#normalized)): *[OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat)*

*Defined in [packages/ui/src/util/primaryPollutant.ts:67](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/primaryPollutant.ts#L67)*

From a set of normalized pollutant data, find the primary pollutant.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normalized` | [Normalized](_packages_dataproviders_src_types_.md#normalized) | The normalized data for all pollutants.  |

**Returns:** *[OpenAQFormat](_packages_dataproviders_src_util_openaq_.md#openaqformat)*
