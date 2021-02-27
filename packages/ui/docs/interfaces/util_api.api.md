[@shootismoke/ui](../README.md) / [Exports](../modules.md) / [util/api](../modules/util_api.md) / Api

# Interface: Api

[util/api](../modules/util_api.md).Api

Api is basically the normalized data from '@shootismoke/dataproviders',
where we make sure to add cigarette conversion. An API is returned only when
there is PM2.5 data (even inacurrate.)

## Table of contents

### Properties

- [pm25](util_api.api.md#pm25)
- [results](util_api.api.md#results)
- [shootismoke](util_api.api.md#shootismoke)

## Properties

### pm25

• **pm25**: { `country`: *string* ; `date`: { local: string; utc: string; } ; `location`: *string* ; `parameter`: *no* \| *bc* \| *ch4* \| *co* \| *c6h6* \| *ox* \| *nh3* \| *nmhc* \| *nox* \| *no2* \| *o3* \| *pm10* \| *pm25* \| *so2* \| *trs* ; `unit`: *ppb* \| *ppm* \| *µg/m³* ; `value`: *number*  } & { `attribution`: *undefined* \| *null* \| { `name`: *string*  } & { url?: string \| undefined; }[] ; `averagingPeriod`: *undefined* \| { `unit`: *string* ; `value`: *null* \| *number*  } ; `city`: *undefined* \| *null* \| *string* ; `coordinates`: *undefined* \| *null* \| { `latitude`: *number* ; `longitude`: *number*  } ; `entity`: *undefined* \| *community* \| *government* \| *research* \| *other* ; `isAnalysis`: *undefined* \| *boolean* ; `isMobile`: *undefined* \| *boolean* ; `sourceName`: *undefined* \| *string*  }

Raw data corresponding to the PM2.5 pollutant.

Defined in: [packages/ui/src/util/api.ts:48](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L48)

___

### results

• **results**: OpenAQResults

All results (normalized) returned by the provider.

Defined in: [packages/ui/src/util/api.ts:44](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L44)

___

### shootismoke

• **shootismoke**: *object*

Data used by shootismoke frontends.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`dailyCigarettes` | *number* | The amount of cigarettes converted from the PM2.5 level.   |
`distanceToStation` | *number* | The distance to the closest station where PM2.5 level can be measured.   |
`isAccurate` | *boolean* | Whether the pm25 level is accuruate. This happens when the station from which the measurement took place is not too far.   |

Defined in: [packages/ui/src/util/api.ts:52](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L52)
