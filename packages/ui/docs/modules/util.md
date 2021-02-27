[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util

# Module: util

## Table of contents

### References

- [promiseToTE](util.md#promisetote)

### Interfaces

- [Api](../interfaces/util.api.md)
- [BackendError](../interfaces/util.backenderror.md)
- [IEmailReport](../interfaces/util.iemailreport.md)
- [IExpoReport](../interfaces/util.iexporeport.md)
- [IUser](../interfaces/util.iuser.md)
- [MongoPushTicket](../interfaces/util.mongopushticket.md)
- [MongoUser](../interfaces/util.mongouser.md)
- [RetryOptions](../interfaces/util.retryoptions.md)

### Type aliases

- [AlgoliaHit](util.md#algoliahit)
- [DistanceUnit](util.md#distanceunit)
- [Frequency](util.md#frequency)
- [IPushTicket](util.md#ipushticket)
- [ShadowPosition](util.md#shadowposition)

### Variables

- [MAX\_DISTANCE\_TO\_STATION](util.md#max_distance_to_station)
- [backgroundColor](util.md#backgroundcolor)
- [disabledOpacity](util.md#disabledopacity)
- [iconBackgroundColor](util.md#iconbackgroundcolor)
- [link](util.md#link)
- [primaryColor](util.md#primarycolor)
- [secondaryTextColor](util.md#secondarytextcolor)
- [shitText](util.md#shittext)
- [spacing](util.md#spacing)
- [text](util.md#text)
- [textColor](util.md#textcolor)
- [title](util.md#title)
- [withLetterSpacing](util.md#withletterspacing)
- [withPadding](util.md#withpadding)

### Functions

- [createApi](util.md#createapi)
- [distanceToStation](util.md#distancetostation)
- [elevationShadowStyle](util.md#elevationshadowstyle)
- [fetchAlgolia](util.md#fetchalgolia)
- [frequencyToPeriod](util.md#frequencytoperiod)
- [getAQI](util.md#getaqi)
- [getCorrectLatLng](util.md#getcorrectlatlng)
- [getPollutantData](util.md#getpollutantdata)
- [getSwearWord](util.md#getswearword)
- [isStationTooFar](util.md#isstationtoofar)
- [noop](util.md#noop)
- [pm25ToCigarettes](util.md#pm25tocigarettes)
- [primaryPollutant](util.md#primarypollutant)
- [raceApiPromise](util.md#raceapipromise)
- [retry](util.md#retry)
- [round](util.md#round)
- [sideEffect](util.md#sideeffect)

## References

### promiseToTE

Re-exports: [promiseToTE](index.md#promisetote)

## Type aliases

### AlgoliaHit

Ƭ **AlgoliaHit**: *t.TypeOf*<*typeof* AlgoliaHitT\>

Defined in: [packages/ui/src/util/fetchAlgolia.ts:56](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fetchAlgolia.ts#L56)

___

### DistanceUnit

Ƭ **DistanceUnit**: *km* \| *mile*

We can show distances in these two units.

Defined in: [packages/ui/src/util/station.ts:27](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L27)

___

### Frequency

Ƭ **Frequency**: *daily* \| *weekly* \| *monthly*

Defined in: [packages/ui/src/util/types.ts:21](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L21)

___

### IPushTicket

Ƭ **IPushTicket**: *Omit*<ExpoPushTicket & { `receiptId?`: *string* ; `userId`: *string*  }, *id*\>

Defined in: [packages/ui/src/util/types.ts:48](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L48)

___

### ShadowPosition

Ƭ **ShadowPosition**: *top* \| *bottom*

Defined in: [packages/ui/src/util/theme.ts:19](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L19)

## Variables

### MAX\_DISTANCE\_TO\_STATION

• `Const` **MAX\_DISTANCE\_TO\_STATION**: *number*

Above this distance (km), we consider the station too far from the user

Defined in: [packages/ui/src/util/station.ts:32](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L32)

___

### backgroundColor

• `Const` **backgroundColor**: *#FAFAFC*= '#FAFAFC'

Defined in: [packages/ui/src/util/theme.ts:21](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L21)

___

### disabledOpacity

• `Const` **disabledOpacity**: *0.3*= 0.3

Opacity for views that are disabled.

Defined in: [packages/ui/src/util/theme.ts:37](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L37)

___

### iconBackgroundColor

• `Const` **iconBackgroundColor**: *#EBE7DD*= '#EBE7DD'

Defined in: [packages/ui/src/util/theme.ts:22](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L22)

___

### link

• `Const` **link**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`color` | *string* |
`textDecorationLine` | *underline* |

Defined in: [packages/ui/src/util/theme.ts:59](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L59)

___

### primaryColor

• `Const` **primaryColor**: *#F8A65D*= '#F8A65D'

Defined in: [packages/ui/src/util/theme.ts:23](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L23)

___

### secondaryTextColor

• `Const` **secondaryTextColor**: *#8B909A*= '#8B909A'

Defined in: [packages/ui/src/util/theme.ts:25](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L25)

___

### shitText

• `Const` **shitText**: *object*

Big text with "Sh*t! I smoked...""

#### Type declaration:

Name | Type |
:------ | :------ |
`color` | *string* |
`fontSize` | *number* |
`fontWeight` | *800* |
`letterSpacing` | *number* |
`lineHeight` | *number* |

Defined in: [packages/ui/src/util/theme.ts:67](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L67)

___

### spacing

• `Const` **spacing**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`big` | *number* |
`mini` | *number* |
`normal` | *number* |
`small` | *number* |
`tiny` | *number* |

Defined in: [packages/ui/src/util/theme.ts:26](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L26)

___

### text

• `Const` **text**: *object*

Normal text

#### Type declaration:

Name | Type |
:------ | :------ |
`color` | *string* |
`fontSize` | *number* |
`letterSpacing` | *number* |
`lineHeight` | *number* |

Defined in: [packages/ui/src/util/theme.ts:78](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L78)

___

### textColor

• `Const` **textColor**: *#44464A*= '#44464A'

Defined in: [packages/ui/src/util/theme.ts:24](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L24)

___

### title

• `Const` **title**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`color` | *string* |
`fontSize` | *number* |
`fontWeight` | *800* |
`letterSpacing` | *number* |
`lineHeight` | *number* |

Defined in: [packages/ui/src/util/theme.ts:85](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L85)

___

### withLetterSpacing

• `Const` **withLetterSpacing**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`letterSpacing` | *number* |

Defined in: [packages/ui/src/util/theme.ts:93](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L93)

___

### withPadding

• `Const` **withPadding**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`paddingHorizontal` | *number* |

Defined in: [packages/ui/src/util/theme.ts:97](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L97)

## Functions

### createApi

▸ **createApi**(`gps`: LatLng, `results`: OpenAQResults): [*Api*](../interfaces/util_api.api.md)

Given some results data points, and the current GPS, construct an API
object with sanitized data.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gps` | LatLng | - |
`results` | OpenAQResults | The results results data to process    |

**Returns:** [*Api*](../interfaces/util_api.api.md)

Defined in: [packages/ui/src/util/api.ts:91](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L91)

___

### distanceToStation

▸ **distanceToStation**(`currentLocation`: LatLng, `pm25Measurement`: OpenAQResult, `unit?`: [*DistanceUnit*](util_station.md#distanceunit)): *number*

Get distance from current location to station.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`currentLocation` | LatLng | - | The current location of the user.   |
`pm25Measurement` | OpenAQResult | - | - |
`unit` | [*DistanceUnit*](util_station.md#distanceunit) | 'km' | The unit of measure returned.    |

**Returns:** *number*

Defined in: [packages/ui/src/util/station.ts:72](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L72)

___

### elevationShadowStyle

▸ **elevationShadowStyle**(`elevation`: *number*, `position?`: [*ShadowPosition*](util_theme.md#shadowposition)): ViewStyle

Get consistent shadows between iOS and Android

**`see`** https://stenbeck.io/styling-shadows-in-react-native-ios-and-android/

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`elevation` | *number* | - |
`position` | [*ShadowPosition*](util_theme.md#shadowposition) | 'bottom' |

**Returns:** ViewStyle

Defined in: [packages/ui/src/util/theme.ts:43](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L43)

___

### fetchAlgolia

▸ **fetchAlgolia**(`search`: *string*, `gps?`: LatLng): *TE.TaskEither*<Error, [*AlgoliaHit*](util_fetchalgolia.md#algoliahit)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`search` | *string* |
`gps?` | LatLng |

**Returns:** *TE.TaskEither*<Error, [*AlgoliaHit*](util_fetchalgolia.md#algoliahit)[]\>

Defined in: [packages/ui/src/util/fetchAlgolia.ts:64](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fetchAlgolia.ts#L64)

___

### frequencyToPeriod

▸ **frequencyToPeriod**(`frequency`: [*Frequency*](util_types.md#frequency)): *string*

Convert a frequency to its equivalent period.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`frequency` | [*Frequency*](util_types.md#frequency) | The frequency to convert.    |

**Returns:** *string*

Defined in: [packages/ui/src/util/frequency.ts:24](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/frequency.ts#L24)

___

### getAQI

▸ **getAQI**(`OpenAQResults`: OpenAQResults): *number*

From a set of OpenAQResults pollutant data, get the AQI, that is, the AQI of
the primary pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`OpenAQResults` | OpenAQResults | The OpenAQResults data for all pollutants.    |

**Returns:** *number*

Defined in: [packages/ui/src/util/pollutant.ts:128](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/pollutant.ts#L128)

___

### getCorrectLatLng

▸ **getCorrectLatLng**(`currentLocation`: LatLng, `station`: LatLng): LatLng

Station given by the AQICN API is fucked up. Sometimes it's [lat, lng],
sometimes it's [lng, lat].
We check here with the user's real currentLocation coordinates, and take the
"closest" one.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`currentLocation` | LatLng | An object containing {latitude, longitude} representing the user's current location.   |
`station` | LatLng | An object containing {latitude, longitude} representing the station's location.    |

**Returns:** LatLng

Defined in: [packages/ui/src/util/station.ts:45](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L45)

___

### getPollutantData

▸ **getPollutantData**(`pollutant`: Pollutant): PollutantData

Get metadata about a pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pollutant` | Pollutant | The pollutant to get the data.    |

**Returns:** PollutantData

Defined in: [packages/ui/src/util/pollutant.ts:89](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/pollutant.ts#L89)

___

### getSwearWord

▸ **getSwearWord**(`cigaretteCount`: *number*): *string*

Return a random swear word, untranslated.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`cigaretteCount` | *number* | The cigarette count for which we show the swear word.    |

**Returns:** *string*

Defined in: [packages/ui/src/util/swearWords.ts:36](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/swearWords.ts#L36)

___

### isStationTooFar

▸ **isStationTooFar**(`currentLocation`: LatLng, `pm25Measurement`: OpenAQResult): *boolean*

Returns true if the station is at more than [MAX_DISTANCE_TO_STATION](util.md#max_distance_to_station)
kilometers away from the current location.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`currentLocation` | LatLng | The current location of the user.   |
`pm25Measurement` | OpenAQResult | - |

**Returns:** *boolean*

Defined in: [packages/ui/src/util/station.ts:101](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/station.ts#L101)

___

### noop

▸ **noop**(): *void*

A function that does nothing.

**Returns:** *void*

Defined in: [packages/ui/src/util/noop.ts:20](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/noop.ts#L20)

___

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

___

### primaryPollutant

▸ **primaryPollutant**(`OpenAQResults`: OpenAQResults): OpenAQResult

From a set of OpenAQResults pollutant data, find the primary pollutant.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`OpenAQResults` | OpenAQResults | The OpenAQResults data for all pollutants.    |

**Returns:** OpenAQResult

Defined in: [packages/ui/src/util/pollutant.ts:146](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/pollutant.ts#L146)

___

### raceApiPromise

▸ **raceApiPromise**(`gps`: LatLng, `options`: RaceApiOptions): *Promise*<[*Api*](../interfaces/util_api.api.md)\>

Fetch data parallely from difference data sources, and return the first
response as an [Api](../interfaces/util.api.md) format.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gps` | LatLng | The GPS coordinates to fetch data for    |
`options` | RaceApiOptions | - |

**Returns:** *Promise*<[*Api*](../interfaces/util_api.api.md)\>

Defined in: [packages/ui/src/util/api.ts:155](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L155)

___

### retry

▸ **retry**<A\>(`teFn`: (`status`: RetryStatus, `delay`: *number*) => *TE.TaskEither*<Error, A\>, `options?`: [*RetryOptions*](../interfaces/util_fp.retryoptions.md)): *TE.TaskEither*<Error, A\>

Retry a TaskEither.

#### Type parameters:

Name |
:------ |
`A` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teFn` | (`status`: RetryStatus, `delay`: *number*) => *TE.TaskEither*<Error, A\> | A function returning a TE    |
`options` | [*RetryOptions*](../interfaces/util_fp.retryoptions.md) | - |

**Returns:** *TE.TaskEither*<Error, A\>

Defined in: [packages/ui/src/util/fp.ts:76](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fp.ts#L76)

___

### round

▸ **round**(`n`: *number*): *number*

Round a number to 1 decimal. Useful for showing cigarettes on the home page.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`n` | *number* | The number to round;    |

**Returns:** *number*

Defined in: [packages/ui/src/util/api.ts:75](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/api.ts#L75)

___

### sideEffect

▸ **sideEffect**<E, A\>(`fn`: (`input`: A) => *TE.TaskEither*<E, void\>): (`input`: A) => *TaskEither*<E, A\>

A side-effect in a TaskEither chain: if the TaskEither fails, still return
a TaskEither.Right

**`example`** 
```
function myTe(value: number) { // A TaskEither };

pipe(
  TE.of(1),
  TE.chain(sideEffect(myTe)
)
```

#### Type parameters:

Name |
:------ |
`E` |
`A` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`input`: A) => *TE.TaskEither*<E, void\> |

**Returns:** *function*

Defined in: [packages/ui/src/util/fp.ts:47](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/fp.ts#L47)
