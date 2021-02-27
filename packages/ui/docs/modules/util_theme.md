[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/theme

# Module: util/theme

## Table of contents

### Type aliases

- [ShadowPosition](util_theme.md#shadowposition)

### Variables

- [backgroundColor](util_theme.md#backgroundcolor)
- [disabledOpacity](util_theme.md#disabledopacity)
- [iconBackgroundColor](util_theme.md#iconbackgroundcolor)
- [link](util_theme.md#link)
- [primaryColor](util_theme.md#primarycolor)
- [secondaryTextColor](util_theme.md#secondarytextcolor)
- [shitText](util_theme.md#shittext)
- [spacing](util_theme.md#spacing)
- [text](util_theme.md#text)
- [textColor](util_theme.md#textcolor)
- [title](util_theme.md#title)
- [withLetterSpacing](util_theme.md#withletterspacing)
- [withPadding](util_theme.md#withpadding)

### Functions

- [elevationShadowStyle](util_theme.md#elevationshadowstyle)

## Type aliases

### ShadowPosition

Ƭ **ShadowPosition**: *top* \| *bottom*

Defined in: [packages/ui/src/util/theme.ts:19](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/theme.ts#L19)

## Variables

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
