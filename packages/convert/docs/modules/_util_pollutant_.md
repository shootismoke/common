[@shootismoke/convert](../README.md) › [Globals](../globals.md) › ["util/pollutant"](_util_pollutant_.md)

# External module: "util/pollutant"

## Index

### Interfaces

* [PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)

### Type aliases

* [Pollutant](_util_pollutant_.md#pollutant)
* [Unit](_util_pollutant_.md#unit)

### Functions

* [getMetadata](_util_pollutant_.md#getmetadata)
* [isPollutant](_util_pollutant_.md#ispollutant)

### Object literals

* [AllPollutants](_util_pollutant_.md#const-allpollutants)

## Type aliases

###  Pollutant

Ƭ **Pollutant**: *"co" | "c6h6" | "ox" | "nh3" | "nmhc" | "no" | "nox" | "no2" | "o3" | "pm10" | "pm25" | "so2" | "trs"*

*Defined in [util/pollutant.ts:4](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L4)*

All the pollutants tracked by @shootismoke

___

###  Unit

Ƭ **Unit**: *"ppb" | "ppm" | "µg/m³"*

*Defined in [util/pollutant.ts:33](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L33)*

## Functions

###  getMetadata

▸ **getMetadata**(`pollutant`: [Pollutant](_util_pollutant_.md#pollutant)): *[PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)*

*Defined in [util/pollutant.ts:134](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L134)*

Get metadata (code, name, unit) for a pollutant

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | [Pollutant](_util_pollutant_.md#pollutant) | The pollutant to get the metadata from  |

**Returns:** *[PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)*

___

###  isPollutant

▸ **isPollutant**(`pollutant`: string): *pollutant is Pollutant*

*Defined in [util/pollutant.ts:144](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L144)*

Check if the input pollutant is a recognized pollutant which we can convert
AQI to/from raw concentrations

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | string | The pollutant to test  |

**Returns:** *pollutant is Pollutant*

## Object literals

### `Const` AllPollutants

### ▪ **AllPollutants**: *object*

*Defined in [util/pollutant.ts:48](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L48)*

All the pollutants tracked by @shootismoke

▪ **c6h6**: *object*

*Defined in [util/pollutant.ts:55](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L55)*

* **description**: *string* = "Benzene"

* **id**: *"c6h6"* = "c6h6"

* **name**: *string* = "C6H6"

* **preferredUnit**: *"µg/m³"* =  ugm3

▪ **co**: *object*

*Defined in [util/pollutant.ts:49](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L49)*

* **description**: *string* = "Carbon monoxide"

* **id**: *"co"* = "co"

* **name**: *string* = "CO"

* **preferredUnit**: *"ppb"* =  ppb

▪ **nh3**: *object*

*Defined in [util/pollutant.ts:73](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L73)*

* **description**: *string* = "Ammonia"

* **id**: *"nh3"* = "nh3"

* **name**: *string* = "NH3"

* **preferredUnit**: *"ppb"* =  ppb

▪ **nmhc**: *object*

*Defined in [util/pollutant.ts:79](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L79)*

* **description**: *string* = "Non-methane hydrocarbons"

* **id**: *"nmhc"* = "nmhc"

* **name**: *string* = "NMHC"

* **preferredUnit**: *"ppb"* =  ppb

▪ **no**: *object*

*Defined in [util/pollutant.ts:85](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L85)*

* **description**: *string* = "Nitrogen monoxide"

* **id**: *"no"* = "no"

* **name**: *string* = "NO"

* **preferredUnit**: *"ppb"* =  ppb

▪ **no2**: *object*

*Defined in [util/pollutant.ts:97](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L97)*

* **description**: *string* = "Nitrogen dioxide"

* **id**: *"no2"* = "no2"

* **name**: *string* = "NO2"

* **preferredUnit**: *"ppb"* =  ppb

▪ **nox**: *object*

*Defined in [util/pollutant.ts:91](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L91)*

* **description**: *string* = "Nitrogen oxides"

* **id**: *"nox"* = "nox"

* **name**: *string* = "NOx"

* **preferredUnit**: *"ppb"* =  ppb

▪ **o3**: *object*

*Defined in [util/pollutant.ts:67](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L67)*

* **description**: *string* = "Ozone"

* **id**: *"o3"* = "o3"

* **name**: *string* = "O3"

* **preferredUnit**: *"ppb"* =  ppb

▪ **ox**: *object*

*Defined in [util/pollutant.ts:61](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L61)*

* **description**: *string* = "Photochemical oxidants"

* **id**: *"ox"* = "ox"

* **name**: *string* = "Ox"

* **preferredUnit**: *"ppb"* =  ppb

▪ **pm10**: *object*

*Defined in [util/pollutant.ts:109](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L109)*

* **description**: *string* = "Inhalable particulate matter (<10µm)"

* **id**: *"pm10"* = "pm10"

* **name**: *string* = "PM10"

* **preferredUnit**: *"µg/m³"* =  ugm3

▪ **pm25**: *object*

*Defined in [util/pollutant.ts:103](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L103)*

* **description**: *string* = "Fine particulate matter (<2.5µm)"

* **id**: *"pm25"* = "pm25"

* **name**: *string* = "PM25"

* **preferredUnit**: *"µg/m³"* =  ugm3

▪ **so2**: *object*

*Defined in [util/pollutant.ts:115](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L115)*

* **description**: *string* = "Sulfur dioxide"

* **id**: *"so2"* = "so2"

* **name**: *string* = "SO2"

* **preferredUnit**: *"ppb"* =  ppb

▪ **trs**: *object*

*Defined in [util/pollutant.ts:121](https://github.com/shootismoke/common/blob/0be10ae/packages/convert/src/util/pollutant.ts#L121)*

* **description**: *string* = "Total reduced sulfur"

* **id**: *"trs"* = "trs"

* **name**: *string* = "TRS"

* **preferredUnit**: *"µg/m³"* =  ugm3
