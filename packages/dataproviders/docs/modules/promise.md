[@shootismoke/dataproviders](../README.md) / [Exports](../modules.md) / promise

# Module: promise

## Table of contents

### Interfaces

- [Provider](../interfaces/promise.provider.md)

### Variables

- [aqicn](promise.md#aqicn)
- [openaq](promise.md#openaq)
- [waqi](promise.md#waqi)

## Variables

### aqicn

• `Const` **aqicn**: [*Provider*](../interfaces/promise.provider.md)<{ `attributions`: *null* \| { name: string; } & { `url`: *undefined* \| *string*  }[] ; `city`: { geo: [string \| number, string \| number] \| null; name: string \| undefined; url: string \| undefined; } ; `dominentpol`: *undefined* \| *string* ; `iaqi`: *undefined* \| {} ; `idx`: *number* ; `time`: { s: string \| undefined; tz: string \| undefined; v: number; }  }, { `attributions`: *null* \| { name: string; } & { `url`: *undefined* \| *string*  }[] ; `city`: { geo: [string \| number, string \| number] \| null; name: string \| undefined; url: string \| undefined; } ; `dominentpol`: *undefined* \| *string* ; `iaqi`: *undefined* \| {} ; `idx`: *number* ; `time`: { s: string \| undefined; tz: string \| undefined; v: number; }  }, AqicnOptions\>

Defined in: [promise.ts:48](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L48)

___

### openaq

• `Const` **openaq**: [*Provider*](../interfaces/promise.provider.md)<{ `meta`: { found: number; license: string; limit: number; name: string; page: number; website: string; } ; `results`: { country: string; date: { local: string; utc: string; }; location: string; parameter: "bc" \| "ch4" \| "co" \| "c6h6" \| "ox" \| "nh3" \| "nmhc" \| "no" \| "nox" \| "no2" \| "o3" \| "pm10" \| "pm25" \| "so2" \| "trs"; value: number; unit: "ppb" \| ... 1 more ... \| "µg/m³"; } & { `attribution`: *undefined* \| *null* \| { name: string; } & { url?: string \| undefined; }[] ; `averagingPeriod`: *undefined* \| { unit: string; value: number \| null; } ; `city`: *undefined* \| *null* \| *string* ; `coordinates`: *undefined* \| *null* \| { latitude: number; longitude: number; } ; `entity`: *undefined* \| *community* \| *government* \| *research* \| *other* ; `isAnalysis`: *undefined* \| *boolean* ; `isMobile`: *undefined* \| *boolean* ; `sourceName`: *undefined* \| *string*  }[]  }, { `meta`: { found: number; license: string; limit: number; name: string; page: number; website: string; } ; `results`: { country: string; date: { local: string; utc: string; }; location: string; parameter: "bc" \| "ch4" \| "co" \| "c6h6" \| "ox" \| "nh3" \| "nmhc" \| "no" \| "nox" \| "no2" \| "o3" \| "pm10" \| "pm25" \| "so2" \| "trs"; value: number; unit: "ppb" \| ... 1 more ... \| "µg/m³"; } & { `attribution`: *undefined* \| *null* \| { name: string; } & { url?: string \| undefined; }[] ; `averagingPeriod`: *undefined* \| { unit: string; value: number \| null; } ; `city`: *undefined* \| *null* \| *string* ; `coordinates`: *undefined* \| *null* \| { latitude: number; longitude: number; } ; `entity`: *undefined* \| *community* \| *government* \| *research* \| *other* ; `isAnalysis`: *undefined* \| *boolean* ; `isMobile`: *undefined* \| *boolean* ; `sourceName`: *undefined* \| *string*  }[]  }, OpenAQOptions\>

Defined in: [promise.ts:49](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L49)

___

### waqi

• `Const` **waqi**: [*Provider*](../interfaces/promise.provider.md)<{ `d`: { d: number; geo: [number, number]; key: string; nlo: string; nna: string; pol: string; t: number; u: string; v: string; x: string; }[] ; `g`: *any*  }, { `d`: { d: number; geo: [number, number]; key: string; nlo: string; nna: string; pol: string; t: number; u: string; v: string; x: string; }[] ; `g`: *any*  }, unknown\>

Defined in: [promise.ts:50](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/promise.ts#L50)
