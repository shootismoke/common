[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / util/countryCode

# Module: util/countryCode

## Table of contents

### Functions

- [getCountryCode](util_countrycode.md#getcountrycode)
- [getCountryFromCode](util_countrycode.md#getcountryfromcode)

## Functions

### getCountryCode

▸ **getCountryCode**(`input`: *string*): *O.Option*<string\>

Given a country name, gets the ISO 3166-1 Alpha-2 code of the country.

**`example`** 
```typescript
getCountryCode('united   States'); // 'US'
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* | The country name, can contain multiple spaces, dashes...   |

**Returns:** *O.Option*<string\>

Defined in: [util/countryCode.ts:38](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/countryCode.ts#L38)

___

### getCountryFromCode

▸ **getCountryFromCode**(`code`: *string*): *string* \| *undefined*

getCountryFromCode gets the country name from its ISO 3166-1 Alpha-2 code.

**`todo`** This function should live in @shootismoke/common.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`code` | *string* | The ISO 3166-1 Alpha-2 code of the country.   |

**Returns:** *string* \| *undefined*

Defined in: [util/countryCode.ts:64](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/countryCode.ts#L64)
