[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/aqicn/fetchBy"](_packages_dataproviders_src_providers_aqicn_fetchby_.md)

# Module: "packages/dataproviders/src/providers/aqicn/fetchBy"

## Index

### Interfaces

* [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md)

### Functions

* [checkError](_packages_dataproviders_src_providers_aqicn_fetchby_.md#checkerror)
* [checkToken](_packages_dataproviders_src_providers_aqicn_fetchby_.md#checktoken)
* [fetchByGps](_packages_dataproviders_src_providers_aqicn_fetchby_.md#fetchbygps)
* [fetchByStation](_packages_dataproviders_src_providers_aqicn_fetchby_.md#fetchbystation)

## Functions

###  checkError

▸ **checkError**(`__namedParameters`: object): *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*

*Defined in [packages/dataproviders/src/providers/aqicn/fetchBy.ts:13](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/aqicn/fetchBy.ts#L13)*

Check if the response we get from aqicn is `{"status": "error", "msg": "..."}`,
if yes, return an error.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`data` | undefined &#124; string &#124; object |
`msg` | undefined &#124; string |
`status` | "ok" &#124; "error" &#124; "nope" |

**Returns:** *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*

___

###  checkToken

▸ **checkToken**(`options?`: [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md)): *TaskEither‹Error, undefined›*

*Defined in [packages/dataproviders/src/providers/aqicn/fetchBy.ts:36](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/aqicn/fetchBy.ts#L36)*

Check that a token has been correctly passed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md) | Options to pass to aqicn  |

**Returns:** *TaskEither‹Error, undefined›*

___

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `options`: [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md)): *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*

*Defined in [packages/dataproviders/src/providers/aqicn/fetchBy.ts:48](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/aqicn/fetchBy.ts#L48)*

Fetch the closest station to the user's current position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | Latitude and longitude of the user's current position  |
`options` | [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md) | - |

**Returns:** *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options`: [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md)): *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*

*Defined in [packages/dataproviders/src/providers/aqicn/fetchBy.ts:71](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/providers/aqicn/fetchBy.ts#L71)*

Fetch data by station

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stationId` | string | The station ID to search  |
`options` | [AqicnOptions](../interfaces/_packages_dataproviders_src_providers_aqicn_fetchby_.aqicnoptions.md) | - |

**Returns:** *TaskEither‹Error, [ByStation](_packages_dataproviders_src_providers_aqicn_validation_.md#bystation)›*
