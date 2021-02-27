[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/secretSauce

# Module: util/secretSauce

## Table of contents

### Functions

- [pm25ToCigarettes](util_secretsauce.md#pm25tocigarettes)

## Functions

### pm25ToCigarettes

▸ **pm25ToCigarettes**(`pm25`: *number*): *number*

Convert raw pm25 level to number of cigarettes. 1 cigarette is equivalent of
a PM2.5 level of 22ug/m3.

**`see`** https://berkeleyearth.org/air-pollution-and-cigarette-equivalence/

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pm25` | *number* | The raw PM2.5 level, in ug/m3.    |

**Returns:** *number*

Defined in: [packages/ui/src/util/secretSauce.ts:24](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/secretSauce.ts#L24)
