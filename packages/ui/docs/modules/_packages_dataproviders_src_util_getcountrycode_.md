[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/util/getCountryCode"](_packages_dataproviders_src_util_getcountrycode_.md)

# Module: "packages/dataproviders/src/util/getCountryCode"

## Index

### Interfaces

* [Country](../interfaces/_packages_dataproviders_src_util_getcountrycode_.country.md)

### Functions

* [getCountryCode](_packages_dataproviders_src_util_getcountrycode_.md#getcountrycode)

## Functions

###  getCountryCode

▸ **getCountryCode**(`input`: string): *O.Option‹string›*

*Defined in [packages/dataproviders/src/util/getCountryCode.ts:38](https://github.com/shootismoke/common/blob/72777b1/packages/dataproviders/src/util/getCountryCode.ts#L38)*

Given a country name, gets the ISO 3166-1 Alpha-2 code of the country

**`example`** 
```typescript
getCountryCode('united   States'); // 'US'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The country name, can contain multiple spaces, dashes... |

**Returns:** *O.Option‹string›*
