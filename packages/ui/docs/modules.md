[@shootismoke/ui](README.md) / Exports

# @shootismoke/ui

## Table of contents

### Interfaces

- [Api](interfaces/Api.md)
- [BackendError](interfaces/BackendError.md)
- [IEmailReport](interfaces/IEmailReport.md)
- [IExpoReport](interfaces/IExpoReport.md)
- [IUser](interfaces/IUser.md)
- [MongoPushTicket](interfaces/MongoPushTicket.md)
- [MongoUser](interfaces/MongoUser.md)
- [RetryOptions](interfaces/RetryOptions.md)

### Type Aliases

- [DistanceUnit](modules.md#distanceunit)
- [Frequency](modules.md#frequency)
- [GeoapifyRes](modules.md#geoapifyres)
- [IPushTicket](modules.md#ipushticket)
- [ShadowPosition](modules.md#shadowposition)

### Variables

- [FrequencyContext](modules.md#frequencycontext)
- [MAX\_DISTANCE\_TO\_STATION](modules.md#max_distance_to_station)
- [backgroundColor](modules.md#backgroundcolor)
- [disabledOpacity](modules.md#disabledopacity)
- [iconBackgroundColor](modules.md#iconbackgroundcolor)
- [link](modules.md#link)
- [primaryColor](modules.md#primarycolor)
- [secondaryTextColor](modules.md#secondarytextcolor)
- [shitText](modules.md#shittext)
- [spacing](modules.md#spacing)
- [text](modules.md#text)
- [textColor](modules.md#textcolor)
- [title](modules.md#title)
- [withLetterSpacing](modules.md#withletterspacing)
- [withPadding](modules.md#withpadding)

### Functions

- [FrequencyContextProvider](modules.md#frequencycontextprovider)
- [capitalize](modules.md#capitalize)
- [createApi](modules.md#createapi)
- [distanceToStation](modules.md#distancetostation)
- [elevationShadowStyle](modules.md#elevationshadowstyle)
- [fetchStationId](modules.md#fetchstationid)
- [frequencyToPeriod](modules.md#frequencytoperiod)
- [geoapify](modules.md#geoapify)
- [getAQI](modules.md#getaqi)
- [getCorrectLatLng](modules.md#getcorrectlatlng)
- [getPollutantData](modules.md#getpollutantdata)
- [getSwearWord](modules.md#getswearword)
- [isStationTooFar](modules.md#isstationtoofar)
- [noop](modules.md#noop)
- [pm25ToCigarettes](modules.md#pm25tocigarettes)
- [primaryPollutant](modules.md#primarypollutant)
- [promiseToTE](modules.md#promisetote)
- [raceApiPromise](modules.md#raceapipromise)
- [retry](modules.md#retry)
- [round](modules.md#round)
- [sideEffect](modules.md#sideeffect)
- [slugify](modules.md#slugify)

## Type Aliases

### DistanceUnit

Ƭ **DistanceUnit**: ``"km"`` \| ``"mile"``

We can show distances in these two units.

#### Defined in

[packages/ui/src/util/station.ts:36](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/station.ts#L36)

___

### Frequency

Ƭ **Frequency**: ``"daily"`` \| ``"weekly"`` \| ``"monthly"``

#### Defined in

[packages/ui/src/util/types.ts:21](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/types.ts#L21)

___

### GeoapifyRes

Ƭ **GeoapifyRes**: `t.TypeOf`<typeof `GeoapifyResT`\>

#### Defined in

[packages/ui/src/util/geoapify.ts:59](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/geoapify.ts#L59)

___

### IPushTicket

Ƭ **IPushTicket**: `Omit`<`ExpoPushTicket` & { `receiptId?`: `string` ; `userId`: `string`  }, ``"id"``\>

#### Defined in

[packages/ui/src/util/types.ts:48](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/types.ts#L48)

___

### ShadowPosition

Ƭ **ShadowPosition**: ``"top"`` \| ``"bottom"``

#### Defined in

[packages/ui/src/util/theme.ts:19](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L19)

## Variables

### FrequencyContext

• `Const` **FrequencyContext**: `Context`<`Context`\>

#### Defined in

[packages/ui/src/context/Frequency.tsx:27](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/context/Frequency.tsx#L27)

___

### MAX\_DISTANCE\_TO\_STATION

• `Const` **MAX\_DISTANCE\_TO\_STATION**: `number`

Above this distance (km), we consider the station too far from the user

#### Defined in

[packages/ui/src/util/station.ts:41](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/station.ts#L41)

___

### backgroundColor

• `Const` **backgroundColor**: ``"#FAFAFC"``

#### Defined in

[packages/ui/src/util/theme.ts:21](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L21)

___

### disabledOpacity

• `Const` **disabledOpacity**: ``0.3``

Opacity for views that are disabled.

#### Defined in

[packages/ui/src/util/theme.ts:37](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L37)

___

### iconBackgroundColor

• `Const` **iconBackgroundColor**: ``"#EBE7DD"``

#### Defined in

[packages/ui/src/util/theme.ts:22](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L22)

___

### link

• `Const` **link**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `textDecorationLine` | ``"underline"`` |

#### Defined in

[packages/ui/src/util/theme.ts:59](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L59)

___

### primaryColor

• `Const` **primaryColor**: ``"#F8A65D"``

#### Defined in

[packages/ui/src/util/theme.ts:23](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L23)

___

### secondaryTextColor

• `Const` **secondaryTextColor**: ``"#8B909A"``

#### Defined in

[packages/ui/src/util/theme.ts:25](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L25)

___

### shitText

• `Const` **shitText**: `Object`

Big text with "Sh*t! I smoked...""

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `fontSize` | `number` |
| `fontWeight` | ``"800"`` |
| `letterSpacing` | `number` |
| `lineHeight` | `number` |

#### Defined in

[packages/ui/src/util/theme.ts:67](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L67)

___

### spacing

• `Const` **spacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `big` | `number` |
| `mini` | `number` |
| `normal` | `number` |
| `small` | `number` |
| `tiny` | `number` |

#### Defined in

[packages/ui/src/util/theme.ts:26](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L26)

___

### text

• `Const` **text**: `Object`

Normal text

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `fontSize` | `number` |
| `letterSpacing` | `number` |
| `lineHeight` | `number` |

#### Defined in

[packages/ui/src/util/theme.ts:78](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L78)

___

### textColor

• `Const` **textColor**: ``"#44464A"``

#### Defined in

[packages/ui/src/util/theme.ts:24](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L24)

___

### title

• `Const` **title**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `fontSize` | `number` |
| `fontWeight` | ``"800"`` |
| `letterSpacing` | `number` |
| `lineHeight` | `number` |

#### Defined in

[packages/ui/src/util/theme.ts:85](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L85)

___

### withLetterSpacing

• `Const` **withLetterSpacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `letterSpacing` | `number` |

#### Defined in

[packages/ui/src/util/theme.ts:93](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L93)

___

### withPadding

• `Const` **withPadding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `paddingHorizontal` | `number` |

#### Defined in

[packages/ui/src/util/theme.ts:97](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L97)

## Functions

### FrequencyContextProvider

▸ **FrequencyContextProvider**(`__namedParameters`): `React.ReactElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `Element` |

#### Returns

`React.ReactElement`

#### Defined in

[packages/ui/src/context/Frequency.tsx:32](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/context/Frequency.tsx#L32)

___

### capitalize

▸ **capitalize**(`s`): `string`

Capitalize a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | The string to capitalize |

#### Returns

`string`

#### Defined in

[packages/ui/src/util/station.ts:29](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/station.ts#L29)

___

### createApi

▸ **createApi**(`gps`, `results`, `now?`): [`Api`](interfaces/Api.md)

Given some results data points, and the current GPS, construct an API
object with sanitized data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gps` | `LatLng` | - |
| `results` | `OpenAQResults` | The results results data to process |
| `now` | `Date` | - |

#### Returns

[`Api`](interfaces/Api.md)

#### Defined in

[packages/ui/src/util/api.ts:91](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/api.ts#L91)

___

### distanceToStation

▸ **distanceToStation**(`currentLocation`, `pm25Measurement`, `unit?`): `number`

Get distance from current location to station.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `currentLocation` | `LatLng` | `undefined` | The current location of the user. |
| `pm25Measurement` | `OpenAQResult` | `undefined` | - |
| `unit` | [`DistanceUnit`](modules.md#distanceunit) | `'km'` | The unit of measure returned. |

#### Returns

`number`

#### Defined in

[packages/ui/src/util/station.ts:81](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/station.ts#L81)

___

### elevationShadowStyle

▸ **elevationShadowStyle**(`elevation`, `position?`): `ViewStyle`

Get consistent shadows between iOS and Android

**`See`**

https://stenbeck.io/styling-shadows-in-react-native-ios-and-android/

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `elevation` | `number` | `undefined` |
| `position` | [`ShadowPosition`](modules.md#shadowposition) | `'bottom'` |

#### Returns

`ViewStyle`

#### Defined in

[packages/ui/src/util/theme.ts:43](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/theme.ts#L43)

___

### fetchStationId

▸ **fetchStationId**(`stationId`, `options?`): `Promise`<[`Api`](interfaces/Api.md)\>

Fetch data from correct provider, based on stationId.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stationId` | `string` | The stationId of the station |
| `options?` | `Options` | - |

#### Returns

`Promise`<[`Api`](interfaces/Api.md)\>

#### Defined in

[packages/ui/src/util/provider.ts:53](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/provider.ts#L53)

___

### frequencyToPeriod

▸ **frequencyToPeriod**(`frequency`): `string`

Convert a frequency to its equivalent period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frequency` | [`Frequency`](modules.md#frequency) | The frequency to convert. |

#### Returns

`string`

#### Defined in

[packages/ui/src/util/frequency.ts:24](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/frequency.ts#L24)

___

### geoapify

▸ **geoapify**(`search`, `gps?`): `TE.TaskEither`<`Error`, [`GeoapifyRes`](modules.md#geoapifyres)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `string` |
| `gps?` | `LatLng` |

#### Returns

`TE.TaskEither`<`Error`, [`GeoapifyRes`](modules.md#geoapifyres)[]\>

#### Defined in

[packages/ui/src/util/geoapify.ts:67](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/geoapify.ts#L67)

___

### getAQI

▸ **getAQI**(`results`): `number` \| `undefined`

From a set of OpenAQResults pollutant data, get the AQI, that is, the AQI of
the primary pollutant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | `OpenAQResults` |

#### Returns

`number` \| `undefined`

#### Defined in

[packages/ui/src/util/pollutant.ts:130](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/pollutant.ts#L130)

___

### getCorrectLatLng

▸ **getCorrectLatLng**(`currentLocation`, `station`): `LatLng`

Station given by the AQICN API is fucked up. Sometimes it's [lat, lng],
sometimes it's [lng, lat].
We check here with the user's real currentLocation coordinates, and take the
"closest" one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentLocation` | `LatLng` | An object containing {latitude, longitude} representing the user's current location. |
| `station` | `LatLng` | An object containing {latitude, longitude} representing the station's location. |

#### Returns

`LatLng`

#### Defined in

[packages/ui/src/util/station.ts:54](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/station.ts#L54)

___

### getPollutantData

▸ **getPollutantData**(`pollutant`): `PollutantData`

Get metadata about a pollutant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pollutant` | `Pollutant` | The pollutant to get the data. |

#### Returns

`PollutantData`

#### Defined in

[packages/ui/src/util/pollutant.ts:88](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/pollutant.ts#L88)

___

### getSwearWord

▸ **getSwearWord**(`cigaretteCount`): `string`

Return a random swear word, untranslated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cigaretteCount` | `number` | The cigarette count for which we show the swear word. |

#### Returns

`string`

#### Defined in

[packages/ui/src/util/swearWords.ts:36](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/swearWords.ts#L36)

___

### isStationTooFar

▸ **isStationTooFar**(`currentLocation`, `pm25Measurement`): `boolean`

Returns true if the station is at more than [MAX_DISTANCE_TO_STATION](modules.md#max_distance_to_station)
kilometers away from the current location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentLocation` | `LatLng` | The current location of the user. |
| `pm25Measurement` | `OpenAQResult` | - |

#### Returns

`boolean`

#### Defined in

[packages/ui/src/util/station.ts:110](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/station.ts#L110)

___

### noop

▸ **noop**(): `void`

A function that does nothing.

#### Returns

`void`

#### Defined in

[packages/ui/src/util/noop.ts:20](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/noop.ts#L20)

___

### pm25ToCigarettes

▸ **pm25ToCigarettes**(`pm25`): `number`

Convert raw pm25 level to number of cigarettes. 1 cigarette is equivalent of
a PM2.5 level of 22ug/m3.

**`See`**

https://berkeleyearth.org/air-pollution-and-cigarette-equivalence/

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pm25` | `number` | The raw PM2.5 level, in ug/m3. |

#### Returns

`number`

#### Defined in

[packages/ui/src/util/secretSauce.ts:24](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/secretSauce.ts#L24)

___

### primaryPollutant

▸ **primaryPollutant**(`results`): `OpenAQResult` \| `undefined`

From a set of OpenAQResults pollutant data, find the primary pollutant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `results` | `OpenAQResults` | The OpenAQResults data for all pollutants. |

#### Returns

`OpenAQResult` \| `undefined`

#### Defined in

[packages/ui/src/util/pollutant.ts:154](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/pollutant.ts#L154)

___

### promiseToTE

▸ **promiseToTE**<`A`\>(`fn`): `TE.TaskEither`<`Error`, `A`\>

Convert a Promise<A> into a TaskEither<Error, A>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Lazy`<`Promise`<`A`\>\> | Function returning a Promise |

#### Returns

`TE.TaskEither`<`Error`, `A`\>

#### Defined in

[packages/dataproviders/src/util/fp.ts:16](https://github.com/shootismoke/common//blob/a593a9f/packages/dataproviders/src/util/fp.ts#L16)

___

### raceApiPromise

▸ **raceApiPromise**(`gps`, `options`): `Promise`<[`Api`](interfaces/Api.md)\>

Fetch data parallely from difference data sources, and return the first
response as an [Api](interfaces/Api.md) format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gps` | `LatLng` | The GPS coordinates to fetch data for |
| `options` | `RaceApiOptions` | - |

#### Returns

`Promise`<[`Api`](interfaces/Api.md)\>

#### Defined in

[packages/ui/src/util/api.ts:158](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/api.ts#L158)

___

### retry

▸ **retry**<`A`\>(`teFn`, `options?`): `TE.TaskEither`<`Error`, `A`\>

Retry a TaskEither.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teFn` | (`status`: `RetryStatus`, `delay`: `number`) => `TaskEither`<`Error`, `A`\> | A function returning a TE |
| `options` | [`RetryOptions`](interfaces/RetryOptions.md) | - |

#### Returns

`TE.TaskEither`<`Error`, `A`\>

#### Defined in

[packages/ui/src/util/fp.ts:76](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/fp.ts#L76)

___

### round

▸ **round**(`n`): `number`

Round a number to 1 decimal. Useful for showing cigarettes on the home page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number to round; |

#### Returns

`number`

#### Defined in

[packages/ui/src/util/api.ts:76](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/api.ts#L76)

___

### sideEffect

▸ **sideEffect**<`E`, `A`\>(`fn`): (`input`: `A`) => `TaskEither`<`E`, `A`\>

A side-effect in a TaskEither chain: if the TaskEither fails, still return
a TaskEither.Right

**`Example`**

```
function myTe(value: number) { // A TaskEither };

pipe(
  TE.of(1),
  TE.chain(sideEffect(myTe)
)
```

#### Type parameters

| Name |
| :------ |
| `E` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`input`: `A`) => `TaskEither`<`E`, `void`\> |

#### Returns

`fn`

▸ (`input`): `TaskEither`<`E`, `A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `A` |

##### Returns

`TaskEither`<`E`, `A`\>

#### Defined in

[packages/ui/src/util/fp.ts:47](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/fp.ts#L47)

___

### slugify

▸ **slugify**(`string`, `options?`): `string`

Slugify a string.

**`Example`**

```
import slugify from '@sindresorhus/slugify';

slugify('I ♥ Dogs');
//=> 'i-love-dogs'

slugify('  Déjà Vu!  ');
//=> 'deja-vu'

slugify('fooBar 123 $#%');
//=> 'foo-bar-123'

slugify('я люблю единорогов');
//=> 'ya-lyublyu-edinorogov'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String to slugify. |
| `options?` | `Options` | - |

#### Returns

`string`

#### Defined in

node_modules/@sindresorhus/slugify/index.d.ts:159
