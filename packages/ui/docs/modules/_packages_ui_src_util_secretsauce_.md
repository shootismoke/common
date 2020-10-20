[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/secretSauce"](_packages_ui_src_util_secretsauce_.md)

# Module: "packages/ui/src/util/secretSauce"

## Index

### Functions

* [pm25ToCigarettes](_packages_ui_src_util_secretsauce_.md#pm25tocigarettes)

## Functions

###  pm25ToCigarettes

▸ **pm25ToCigarettes**(`rawPm25`: number): *number*

*Defined in [packages/ui/src/util/secretSauce.ts:24](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/util/secretSauce.ts#L24)*

Convert raw pm25 level to number of cigarettes. 1 cigarette is equivalent of
a PM2.5 level of 22ug/m3.

**`see`** https://berkeleyearth.org/air-pollution-and-cigarette-equivalence/

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rawPm25` | number | The raw PM2.5 level, in ug/m3.  |

**Returns:** *number*
