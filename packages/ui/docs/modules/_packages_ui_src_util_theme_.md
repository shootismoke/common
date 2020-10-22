[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/util/theme"](_packages_ui_src_util_theme_.md)

# Module: "packages/ui/src/util/theme"

## Index

### Type aliases

* [ShadowPosition](_packages_ui_src_util_theme_.md#shadowposition)

### Variables

* [backgroundColor](_packages_ui_src_util_theme_.md#const-backgroundcolor)
* [disabledOpacity](_packages_ui_src_util_theme_.md#const-disabledopacity)
* [iconBackgroundColor](_packages_ui_src_util_theme_.md#const-iconbackgroundcolor)
* [primaryColor](_packages_ui_src_util_theme_.md#const-primarycolor)
* [secondaryTextColor](_packages_ui_src_util_theme_.md#const-secondarytextcolor)
* [textColor](_packages_ui_src_util_theme_.md#const-textcolor)

### Functions

* [elevationShadowStyle](_packages_ui_src_util_theme_.md#elevationshadowstyle)

### Object literals

* [fullScreen](_packages_ui_src_util_theme_.md#const-fullscreen)
* [link](_packages_ui_src_util_theme_.md#const-link)
* [shitText](_packages_ui_src_util_theme_.md#const-shittext)
* [spacing](_packages_ui_src_util_theme_.md#const-spacing)
* [text](_packages_ui_src_util_theme_.md#const-text)
* [title](_packages_ui_src_util_theme_.md#const-title)
* [withLetterSpacing](_packages_ui_src_util_theme_.md#const-withletterspacing)
* [withPadding](_packages_ui_src_util_theme_.md#const-withpadding)

## Type aliases

###  ShadowPosition

Ƭ **ShadowPosition**: *"top" | "bottom"*

*Defined in [packages/ui/src/util/theme.ts:20](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L20)*

## Variables

### `Const` backgroundColor

• **backgroundColor**: *"#FAFAFC"* = "#FAFAFC"

*Defined in [packages/ui/src/util/theme.ts:22](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L22)*

___

### `Const` disabledOpacity

• **disabledOpacity**: *0.3* = 0.3

*Defined in [packages/ui/src/util/theme.ts:38](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L38)*

Opacity for views that are disabled.

___

### `Const` iconBackgroundColor

• **iconBackgroundColor**: *"#EBE7DD"* = "#EBE7DD"

*Defined in [packages/ui/src/util/theme.ts:23](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L23)*

___

### `Const` primaryColor

• **primaryColor**: *"#F8A65D"* = "#F8A65D"

*Defined in [packages/ui/src/util/theme.ts:24](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L24)*

___

### `Const` secondaryTextColor

• **secondaryTextColor**: *"#8B909A"* = "#8B909A"

*Defined in [packages/ui/src/util/theme.ts:26](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L26)*

___

### `Const` textColor

• **textColor**: *"#44464A"* = "#44464A"

*Defined in [packages/ui/src/util/theme.ts:25](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L25)*

## Functions

###  elevationShadowStyle

▸ **elevationShadowStyle**(`elevation`: number, `position`: [ShadowPosition](_packages_ui_src_util_theme_.md#shadowposition)): *ViewStyle*

*Defined in [packages/ui/src/util/theme.ts:44](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L44)*

Get consistent shadows between iOS and Android

**`see`** https://stenbeck.io/styling-shadows-in-react-native-ios-and-android/

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`elevation` | number | - |
`position` | [ShadowPosition](_packages_ui_src_util_theme_.md#shadowposition) | "bottom" |

**Returns:** *ViewStyle*

## Object literals

### `Const` fullScreen

### ▪ **fullScreen**: *object*

*Defined in [packages/ui/src/util/theme.ts:60](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L60)*

###  backgroundColor

• **backgroundColor**: *string*

*Defined in [packages/ui/src/util/theme.ts:61](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L61)*

###  flexGrow

• **flexGrow**: *number* = 1

*Defined in [packages/ui/src/util/theme.ts:62](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L62)*

###  paddingTop

• **paddingTop**: *number* = Constants.statusBarHeight

*Defined in [packages/ui/src/util/theme.ts:63](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L63)*

___

### `Const` link

### ▪ **link**: *object*

*Defined in [packages/ui/src/util/theme.ts:66](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L66)*

###  color

• **color**: *string* = primaryColor

*Defined in [packages/ui/src/util/theme.ts:67](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L67)*

###  textDecorationLine

• **textDecorationLine**: *"underline"* = 'underline' as const

*Defined in [packages/ui/src/util/theme.ts:68](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L68)*

___

### `Const` shitText

### ▪ **shitText**: *object*

*Defined in [packages/ui/src/util/theme.ts:74](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L74)*

Big text with "Sh*t! I smoked...""

###  color

• **color**: *string* = textColor

*Defined in [packages/ui/src/util/theme.ts:75](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L75)*

###  fontSize

• **fontSize**: *number* = 31

*Defined in [packages/ui/src/util/theme.ts:76](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L76)*

###  fontWeight

• **fontWeight**: *"800"* = '800' as const

*Defined in [packages/ui/src/util/theme.ts:77](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L77)*

###  letterSpacing

• **letterSpacing**: *number* = -1

*Defined in [packages/ui/src/util/theme.ts:78](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L78)*

###  lineHeight

• **lineHeight**: *number* = 36

*Defined in [packages/ui/src/util/theme.ts:79](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L79)*

___

### `Const` spacing

### ▪ **spacing**: *object*

*Defined in [packages/ui/src/util/theme.ts:27](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L27)*

###  big

• **big**: *number* = 36

*Defined in [packages/ui/src/util/theme.ts:32](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L32)*

###  mini

• **mini**: *number* = 10

*Defined in [packages/ui/src/util/theme.ts:29](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L29)*

###  normal

• **normal**: *number* = 20

*Defined in [packages/ui/src/util/theme.ts:31](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L31)*

###  small

• **small**: *number* = 15

*Defined in [packages/ui/src/util/theme.ts:30](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L30)*

###  tiny

• **tiny**: *number* = 5

*Defined in [packages/ui/src/util/theme.ts:28](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L28)*

___

### `Const` text

### ▪ **text**: *object*

*Defined in [packages/ui/src/util/theme.ts:85](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L85)*

Normal text

###  color

• **color**: *string* = secondaryTextColor

*Defined in [packages/ui/src/util/theme.ts:86](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L86)*

###  fontSize

• **fontSize**: *number* = 11

*Defined in [packages/ui/src/util/theme.ts:87](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L87)*

###  letterSpacing

• **letterSpacing**: *number* = 0.85

*Defined in [packages/ui/src/util/theme.ts:88](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L88)*

###  lineHeight

• **lineHeight**: *number* = 15

*Defined in [packages/ui/src/util/theme.ts:89](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L89)*

___

### `Const` title

### ▪ **title**: *object*

*Defined in [packages/ui/src/util/theme.ts:92](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L92)*

###  color

• **color**: *string* = textColor

*Defined in [packages/ui/src/util/theme.ts:95](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L95)*

###  fontSize

• **fontSize**: *number* = 12

*Defined in [packages/ui/src/util/theme.ts:96](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L96)*

###  fontWeight

• **fontWeight**: *"800"* = '800' as const

*Defined in [packages/ui/src/util/theme.ts:97](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L97)*

###  letterSpacing

• **letterSpacing**: *number* = 3.14

*Defined in [packages/ui/src/util/theme.ts:93](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L93)*

###  lineHeight

• **lineHeight**: *number* = 18

*Defined in [packages/ui/src/util/theme.ts:94](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L94)*

___

### `Const` withLetterSpacing

### ▪ **withLetterSpacing**: *object*

*Defined in [packages/ui/src/util/theme.ts:100](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L100)*

###  letterSpacing

• **letterSpacing**: *number* = 2

*Defined in [packages/ui/src/util/theme.ts:101](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L101)*

___

### `Const` withPadding

### ▪ **withPadding**: *object*

*Defined in [packages/ui/src/util/theme.ts:104](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L104)*

###  paddingHorizontal

• **paddingHorizontal**: *number* = spacing.normal

*Defined in [packages/ui/src/util/theme.ts:105](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/util/theme.ts#L105)*
