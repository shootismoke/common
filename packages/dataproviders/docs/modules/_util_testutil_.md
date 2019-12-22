[@shootismoke/dataproviders](../README.md) › [Globals](../globals.md) › ["util/testUtil"](_util_testutil_.md)

# External module: "util/testUtil"

## Index

### Interfaces

* [TestProviderOptions](../interfaces/_util_testutil_.testprovideroptions.md)

### Functions

* [testNormalized](_util_testutil_.md#testnormalized)
* [testProvider](_util_testutil_.md#testprovider)

## Functions

###  testNormalized

▸ **testNormalized**(`normalized`: [Normalized](_types_.md#normalized)): *void*

*Defined in [util/testUtil.ts:28](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/util/testUtil.ts#L28)*

Test that normalized data is correct

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normalized` | [Normalized](_types_.md#normalized) | The normalized data to test  |

**Returns:** *void*

___

###  testProvider

▸ **testProvider**<**DataByGps**, **DataByStation**, **Options**>(`provider`: [Provider](../interfaces/_types_.provider.md)‹DataByGps, DataByStation, Options›, `__namedParameters`: object): *void*

*Defined in [util/testUtil.ts:78](https://github.com/shootismoke/common/blob/abfb8ac/packages/dataproviders/src/util/testUtil.ts#L78)*

Test helper to test a provider

**Type parameters:**

▪ **DataByGps**

▪ **DataByStation**

▪ **Options**

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [Provider](../interfaces/_types_.provider.md)‹DataByGps, DataByStation, Options› |
`__namedParameters` | object |

**Returns:** *void*
