[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/util/testUtil"](_packages_dataproviders_src_util_testutil_.md)

# Module: "packages/dataproviders/src/util/testUtil"

## Index

### Interfaces

* [TestProviderE2EOptions](../interfaces/_packages_dataproviders_src_util_testutil_.testprovidere2eoptions.md)

### Functions

* [generateRandomLatLng](_packages_dataproviders_src_util_testutil_.md#generaterandomlatlng)
* [generateRandomStationId](_packages_dataproviders_src_util_testutil_.md#generaterandomstationid)
* [testNormalized](_packages_dataproviders_src_util_testutil_.md#testnormalized)
* [testProviderE2E](_packages_dataproviders_src_util_testutil_.md#testprovidere2e)
* [testTE](_packages_dataproviders_src_util_testutil_.md#testte)

## Functions

###  generateRandomLatLng

▸ **generateRandomLatLng**(): *[LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)*

*Defined in [packages/dataproviders/src/util/testUtil.ts:9](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/util/testUtil.ts#L9)*

**Returns:** *[LatLng](../interfaces/_packages_dataproviders_src_types_.latlng.md)*

___

###  generateRandomStationId

▸ **generateRandomStationId**(): *string*

*Defined in [packages/dataproviders/src/util/testUtil.ts:16](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/util/testUtil.ts#L16)*

**Returns:** *string*

___

###  testNormalized

▸ **testNormalized**(`normalized`: [Normalized](_packages_dataproviders_src_types_.md#normalized)): *void*

*Defined in [packages/dataproviders/src/util/testUtil.ts:25](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/util/testUtil.ts#L25)*

Test that normalized data is correct

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normalized` | [Normalized](_packages_dataproviders_src_types_.md#normalized) | The normalized data to test  |

**Returns:** *void*

___

###  testProviderE2E

▸ **testProviderE2E**‹**DataByGps**, **DataByStation**, **Options**›(`provider`: [Provider](../interfaces/_packages_dataproviders_src_types_.provider.md)‹DataByGps, DataByStation, Options›, `__namedParameters`: object): *void*

*Defined in [packages/dataproviders/src/util/testUtil.ts:100](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/util/testUtil.ts#L100)*

Test helper to test a provider

**Type parameters:**

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

**Parameters:**

▪ **provider**: *[Provider](../interfaces/_packages_dataproviders_src_types_.provider.md)‹DataByGps, DataByStation, Options›*

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`options` | undefined &#124; Options | - |
`skip` | ("fetchByGps" &#124; "fetchByStation")[] | [] |

**Returns:** *void*

___

###  testTE

▸ **testTE**‹**T**›(`te`: TaskEither‹Error, T›, `normalize`: function, `done`: DoneCallback): *void*

*Defined in [packages/dataproviders/src/util/testUtil.ts:40](https://github.com/shootismoke/common/blob/c0e7829/packages/dataproviders/src/util/testUtil.ts#L40)*

Test that a TE is resolving correctly.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **te**: *TaskEither‹Error, T›*

▪ **normalize**: *function*

▸ (`data`: T): *E.Either‹Error, [Normalized](_packages_dataproviders_src_types_.md#normalized)›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

▪ **done**: *DoneCallback*

**Returns:** *void*
