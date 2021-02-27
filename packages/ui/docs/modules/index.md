[@shootismoke/ui](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Namespaces

- [slugify](index.slugify.md)

### Interfaces

- [Api](../interfaces/index.api.md)
- [BackendError](../interfaces/index.backenderror.md)
- [CigarettesProps](../interfaces/index.cigarettesprops.md)
- [IEmailReport](../interfaces/index.iemailreport.md)
- [IExpoReport](../interfaces/index.iexporeport.md)
- [IUser](../interfaces/index.iuser.md)
- [MongoPushTicket](../interfaces/index.mongopushticket.md)
- [MongoUser](../interfaces/index.mongouser.md)
- [RetryOptions](../interfaces/index.retryoptions.md)

### Type aliases

- [AlgoliaHit](index.md#algoliahit)
- [DistanceUnit](index.md#distanceunit)
- [Frequency](index.md#frequency)
- [IPushTicket](index.md#ipushticket)
- [ShadowPosition](index.md#shadowposition)

### Variables

- [FrequencyContext](index.md#frequencycontext)
- [MAX\_DISTANCE\_TO\_STATION](index.md#max_distance_to_station)
- [backgroundColor](index.md#backgroundcolor)
- [disabledOpacity](index.md#disabledopacity)
- [iconBackgroundColor](index.md#iconbackgroundcolor)
- [link](index.md#link)
- [primaryColor](index.md#primarycolor)
- [secondaryTextColor](index.md#secondarytextcolor)
- [shitText](index.md#shittext)
- [slugify](index.md#slugify)
- [spacing](index.md#spacing)
- [text](index.md#text)
- [textColor](index.md#textcolor)
- [title](index.md#title)
- [withLetterSpacing](index.md#withletterspacing)
- [withPadding](index.md#withpadding)

### Functions

- [BoxButton](index.md#boxbutton)
- [Cigarettes](index.md#cigarettes)
- [FrequencyContextProvider](index.md#frequencycontextprovider)
- [createApi](index.md#createapi)
- [distanceToStation](index.md#distancetostation)
- [elevationShadowStyle](index.md#elevationshadowstyle)
- [fetchAlgolia](index.md#fetchalgolia)
- [frequencyToPeriod](index.md#frequencytoperiod)
- [getAQI](index.md#getaqi)
- [getCorrectLatLng](index.md#getcorrectlatlng)
- [getPollutantData](index.md#getpollutantdata)
- [getSwearWord](index.md#getswearword)
- [isStationTooFar](index.md#isstationtoofar)
- [noop](index.md#noop)
- [pm25ToCigarettes](index.md#pm25tocigarettes)
- [primaryPollutant](index.md#primarypollutant)
- [promiseToTE](index.md#promisetote)
- [raceApiPromise](index.md#raceapipromise)
- [retry](index.md#retry)
- [round](index.md#round)
- [sideEffect](index.md#sideeffect)

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

### FrequencyContext

• `Const` **FrequencyContext**: *Context*<Context\>

Defined in: [packages/ui/src/context/Frequency.tsx:27](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/context/Frequency.tsx#L27)

___

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

### slugify

• **slugify**: (`string`: *string*, `options?`: [*Options*](../interfaces/index.slugify.options.md)) => *string*

#### Type declaration:

▸ (`string`: *string*, `options?`: [*Options*](../interfaces/index.slugify.options.md)): *string*

Slugify a string.

**`example`** 
```
import slugify = require('@sindresorhus/slugify');

slugify('I ♥ Dogs');
//=> 'i-love-dogs'

slugify('  Déjà Vu!  ');
//=> 'deja-vu'

slugify('fooBar 123 $#%');
//=> 'foo-bar-123'

slugify('я люблю единорогов');
//=> 'ya-lyublyu-edinorogov'
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`string` | *string* | String to slugify.    |
`options?` | [*Options*](../interfaces/index.slugify.options.md) | - |

**Returns:** *string*

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:185

Name | Type | Description |
:------ | :------ | :------ |
`counter` | () => (`string`: *string*, `options?`: [*Options*](../interfaces/index.slugify.options.md)) => *string* | Returns a new instance of `slugify(string, options?)` with a counter to handle multiple occurences of the same string.  **`param`** String to slugify.   **`example`**  ``` import slugify = require('@sindresorhus/slugify');  const countableSlugify = slugify.counter(); countableSlugify('foo bar'); //=> 'foo-bar'  countableSlugify('foo bar'); //=> 'foo-bar-2'  countableSlugify.reset();  countableSlugify('foo bar'); //=> 'foo-bar' ```  __Use case example of counter__  If, for example, you have a document with multiple sections where each subsection has an example.  ``` ## Section 1  ### Example  ## Section 2  ### Example ```  You can then use `slugify.counter()` to generate unique HTML `id`'s to ensure anchors will link to the right headline.  |

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:119

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

### BoxButton

▸ **BoxButton**(`props`: BoxButtonProps): React.ReactElement

#### Parameters:

Name | Type |
:------ | :------ |
`props` | BoxButtonProps |

**Returns:** React.ReactElement

Defined in: [packages/ui/src/components/BoxButton/BoxButton.tsx:55](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/BoxButton/BoxButton.tsx#L55)

___

### Cigarettes

▸ **Cigarettes**(`props`: [*CigarettesProps*](../interfaces/components_cigarettes_cigarettes.cigarettesprops.md)): React.ReactElement

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*CigarettesProps*](../interfaces/components_cigarettes_cigarettes.cigarettesprops.md) |

**Returns:** React.ReactElement

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:76](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L76)

___

### FrequencyContextProvider

▸ **FrequencyContextProvider**(`__namedParameters`: { `children`: JSX.Element  }): React.ReactElement

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.children` | JSX.Element |

**Returns:** React.ReactElement

Defined in: [packages/ui/src/context/Frequency.tsx:32](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/context/Frequency.tsx#L32)

___

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

Returns true if the station is at more than [MAX_DISTANCE_TO_STATION](index.md#max_distance_to_station)
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

### promiseToTE

▸ **promiseToTE**<A\>(`fn`: *Lazy*<Promise<A\>\>): *TE.TaskEither*<Error, A\>

Convert a Promise<A> into a TaskEither<Error, A>

#### Type parameters:

Name |
:------ |
`A` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fn` | *Lazy*<Promise<A\>\> | Function returning a Promise    |

**Returns:** *TE.TaskEither*<Error, A\>

Defined in: [packages/dataproviders/src/util/fp.ts:16](https://github.com/shootismoke/common/blob/1e71707/packages/dataproviders/src/util/fp.ts#L16)

___

### raceApiPromise

▸ **raceApiPromise**(`gps`: LatLng, `options`: RaceApiOptions): *Promise*<[*Api*](../interfaces/util_api.api.md)\>

Fetch data parallely from difference data sources, and return the first
response as an [Api](../interfaces/index.api.md) format.

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
