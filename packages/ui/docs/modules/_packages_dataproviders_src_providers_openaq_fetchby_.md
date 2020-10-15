[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/providers/openaq/fetchBy"](_packages_dataproviders_src_providers_openaq_fetchby_.md)

# Module: "packages/dataproviders/src/providers/openaq/fetchBy"

## Index

### Interfaces

* [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md)

### Variables

* [BASE_LATEST_URL](_packages_dataproviders_src_providers_openaq_fetchby_.md#const-base_latest_url)
* [BASE_MEASUREMENTS_URL](_packages_dataproviders_src_providers_openaq_fetchby_.md#const-base_measurements_url)
* [RESULT_LIMIT](_packages_dataproviders_src_providers_openaq_fetchby_.md#const-result_limit)

### Functions

* [additionalOptions](_packages_dataproviders_src_providers_openaq_fetchby_.md#additionaloptions)
* [fetchByGps](_packages_dataproviders_src_providers_openaq_fetchby_.md#fetchbygps)
* [fetchByStation](_packages_dataproviders_src_providers_openaq_fetchby_.md#fetchbystation)
* [onError](_packages_dataproviders_src_providers_openaq_fetchby_.md#onerror)

## Variables

### `Const` BASE_LATEST_URL

• **BASE_LATEST_URL**: *"https://api.openaq.org/v1/latest"* = `https://api.openaq.org/v1/latest`

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:15](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L15)*

___

### `Const` BASE_MEASUREMENTS_URL

• **BASE_MEASUREMENTS_URL**: *"https://api.openaq.org/v1/measurements"* = `https://api.openaq.org/v1/measurements`

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:16](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L16)*

___

### `Const` RESULT_LIMIT

• **RESULT_LIMIT**: *10* = 10

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:14](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L14)*

## Functions

###  additionalOptions

▸ **additionalOptions**(`options`: [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md)): *string*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:46](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md) | {} |

**Returns:** *string*

___

###  fetchByGps

▸ **fetchByGps**(`gps`: [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md), `options?`: [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md)): *TaskEither‹Error, [OpenAQLatest](_packages_dataproviders_src_providers_openaq_validation_.md#openaqlatest)›*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:98](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L98)*

Fetch the closest station to the user's current position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gps` | [LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md) | Latitude and longitude of the user's current position  |
`options?` | [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md) | - |

**Returns:** *TaskEither‹Error, [OpenAQLatest](_packages_dataproviders_src_providers_openaq_validation_.md#openaqlatest)›*

___

###  fetchByStation

▸ **fetchByStation**(`stationId`: string, `options?`: [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md)): *TaskEither‹Error, [OpenAQMeasurements](_packages_dataproviders_src_providers_openaq_validation_.md#openaqmeasurements)›*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:120](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L120)*

Fetch data by station

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stationId` | string | The station ID to search  |
`options?` | [OpenAQOptions](../interfaces/_packages_dataproviders_src_providers_openaq_fetchby_.openaqoptions.md) | - |

**Returns:** *TaskEither‹Error, [OpenAQMeasurements](_packages_dataproviders_src_providers_openaq_validation_.md#openaqmeasurements)›*

___

###  onError

▸ **onError**(`error`: object): *Error*

*Defined in [packages/dataproviders/src/providers/openaq/fetchBy.ts:82](https://github.com/shootismoke/common/blob/af8195a/packages/dataproviders/src/providers/openaq/fetchBy.ts#L82)*

Handle error from OpenAQ response

**Parameters:**

▪ **error**: *object*

Name | Type |
------ | ------ |
`response?` | undefined &#124; object |

**Returns:** *Error*
