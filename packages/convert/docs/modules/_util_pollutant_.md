[@shootismoke/convert - v0.2.0](../README.md) › [Globals](../globals.md) › ["util/pollutant"](_util_pollutant_.md)

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
* [AllUnits](_util_pollutant_.md#const-allunits)

## Type aliases

###  Pollutant

Ƭ **Pollutant**: *"co" | "c6h6" | "ox" | "nh3" | "nmhc" | "no" | "nox" | "no2" | "o3" | "pm10" | "pm25" | "so2" | "trs"*

*Defined in [util/pollutant.ts:4](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L4)*

All the pollutants tracked by @shootismoke

___

###  Unit

Ƭ **Unit**: *"ppb" | "ppm" | "µg/m³"*

*Defined in [util/pollutant.ts:42](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L42)*

## Functions

###  getMetadata

▸ **getMetadata**(`pollutant`: [Pollutant](_util_pollutant_.md#pollutant)): *[PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)*

*Defined in [util/pollutant.ts:143](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L143)*

Get metadata (code, name, unit) for a pollutant

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollutant` | [Pollutant](_util_pollutant_.md#pollutant) | The pollutant to get the metadata from  |

**Returns:** *[PollutantMeta](../interfaces/_util_pollutant_.pollutantmeta.md)*

___

###  isPollutant

▸ **isPollutant**(`pollutant`: string): *pollutant is Pollutant*

*Defined in [util/pollutant.ts:153](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L153)*

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

*Defined in [util/pollutant.ts:57](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L57)*

All the pollutants tracked by @shootismoke

▪ **c6h6**: *object*

*Defined in [util/pollutant.ts:64](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L64)*

* **description**: *string* = "Benzene"

* **id**: *"c6h6"* = "c6h6"

* **name**: *string* = "C6H6"

* **preferredUnit**: *"µg/m³"* =  ugm3

▪ **co**: *object*

*Defined in [util/pollutant.ts:58](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L58)*

* **description**: *string* = "Carbon monoxide"

* **id**: *"co"* = "co"

* **name**: *string* = "CO"

* **preferredUnit**: *"ppb"* =  ppb

▪ **nh3**: *object*

*Defined in [util/pollutant.ts:82](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L82)*

* **description**: *string* = "Ammonia"

* **id**: *"nh3"* = "nh3"

* **name**: *string* = "NH3"

* **preferredUnit**: *"ppb"* =  ppb

▪ **nmhc**: *object*

*Defined in [util/pollutant.ts:88](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L88)*

* **description**: *string* = "Non-methane hydrocarbons"

* **id**: *"nmhc"* = "nmhc"

* **name**: *string* = "NMHC"

* **preferredUnit**: *"ppb"* =  ppb

▪ **no**: *object*

*Defined in [util/pollutant.ts:94](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L94)*

* **description**: *string* = "Nitrogen monoxide"

* **id**: *"no"* = "no"

* **name**: *string* = "NO"

* **preferredUnit**: *"ppb"* =  ppb

▪ **no2**: *object*

*Defined in [util/pollutant.ts:106](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L106)*

* **description**: *string* = "Nitrogen dioxide"

* **id**: *"no2"* = "no2"

* **name**: *string* = "NO2"

* **preferredUnit**: *"ppb"* =  ppb

▪ **nox**: *object*

*Defined in [util/pollutant.ts:100](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L100)*

* **description**: *string* = "Nitrogen oxides"

* **id**: *"nox"* = "nox"

* **name**: *string* = "NOx"

* **preferredUnit**: *"ppb"* =  ppb

▪ **o3**: *object*

*Defined in [util/pollutant.ts:76](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L76)*

* **description**: *string* = "Ozone"

* **id**: *"o3"* = "o3"

* **name**: *string* = "O3"

* **preferredUnit**: *"ppb"* =  ppb

▪ **ox**: *object*

*Defined in [util/pollutant.ts:70](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L70)*

* **description**: *string* = "Photochemical oxidants"

* **id**: *"ox"* = "ox"

* **name**: *string* = "Ox"

* **preferredUnit**: *"ppb"* =  ppb

▪ **pm10**: *object*

*Defined in [util/pollutant.ts:118](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L118)*

* **description**: *string* = "Inhalable particulate matter (<10µm)"

* **id**: *"pm10"* = "pm10"

* **name**: *string* = "PM10"

* **preferredUnit**: *"µg/m³"* =  ugm3

▪ **pm25**: *object*

*Defined in [util/pollutant.ts:112](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L112)*

* **description**: *string* = "Fine particulate matter (<2.5µm)"

* **id**: *"pm25"* = "pm25"

* **name**: *string* = "PM25"

* **preferredUnit**: *"µg/m³"* =  ugm3

▪ **so2**: *object*

*Defined in [util/pollutant.ts:124](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L124)*

* **description**: *string* = "Sulfur dioxide"

* **id**: *"so2"* = "so2"

* **name**: *string* = "SO2"

* **preferredUnit**: *"ppb"* =  ppb

▪ **trs**: *object*

*Defined in [util/pollutant.ts:130](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L130)*

* **description**: *string* = "Total reduced sulfur"

* **id**: *"trs"* = "trs"

* **name**: *string* = "TRS"

* **preferredUnit**: *"µg/m³"* =  ugm3

___

### `Const` AllUnits

### ▪ **AllUnits**: *object*

*Defined in [util/pollutant.ts:36](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L36)*

Pollutant concentration units

###  ppb

• **ppb**: *string*

*Defined in [util/pollutant.ts:37](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L37)*

###  ppm

• **ppm**: *string*

*Defined in [util/pollutant.ts:38](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L38)*

###  ugm3

• **ugm3**: *string*

*Defined in [util/pollutant.ts:39](https://github.com/shootismoke/common/blob/5b392da/packages/convert/src/util/pollutant.ts#L39)*
