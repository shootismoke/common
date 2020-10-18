[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/Cigarettes/Cigarette/Cigarette"](_packages_ui_src_cigarettes_cigarette_cigarette_.md)

# Module: "packages/ui/src/Cigarettes/Cigarette/Cigarette"

## Index

### Interfaces

* [CigaretteProps](../interfaces/_packages_ui_src_cigarettes_cigarette_cigarette_.cigaretteprops.md)

### Type aliases

* [CigaretteOrientation](_packages_ui_src_cigarettes_cigarette_cigarette_.md#cigaretteorientation)

### Variables

* [CIGARETTE_ASPECT_RATIO](_packages_ui_src_cigarettes_cigarette_cigarette_.md#const-cigarette_aspect_ratio)
* [CIGARETTE_HEAD_HW_RATIO](_packages_ui_src_cigarettes_cigarette_cigarette_.md#const-cigarette_head_hw_ratio)
* [MIN_PERCENTAGE](_packages_ui_src_cigarettes_cigarette_cigarette_.md#const-min_percentage)
* [styles](_packages_ui_src_cigarettes_cigarette_cigarette_.md#const-styles)

### Functions

* [Cigarette](_packages_ui_src_cigarettes_cigarette_cigarette_.md#cigarette)
* [getCigaretteActualLength](_packages_ui_src_cigarettes_cigarette_cigarette_.md#getcigaretteactuallength)
* [getContainerStyle](_packages_ui_src_cigarettes_cigarette_cigarette_.md#getcontainerstyle)
* [renderCigarette](_packages_ui_src_cigarettes_cigarette_cigarette_.md#rendercigarette)

## Type aliases

###  CigaretteOrientation

Ƭ **CigaretteOrientation**: *"diagonal" | "horizontal" | "vertical"*

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:32](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L32)*

## Variables

### `Const` CIGARETTE_ASPECT_RATIO

• **CIGARETTE_ASPECT_RATIO**: *number* = 21 / 280

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:89](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L89)*

A cigarette's width:height aspect ratio.

___

### `Const` CIGARETTE_HEAD_HW_RATIO

• **CIGARETTE_HEAD_HW_RATIO**: *number* = 27 / 20

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:90](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L90)*

___

### `Const` MIN_PERCENTAGE

• **MIN_PERCENTAGE**: *0.4* = 0.4

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:70](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L70)*

The percentage of cigarette length when `percentage=0`.

___

### `Const` styles

• **styles**: *object* = StyleSheet.create({
	butt: {
		bottom: 0,
		position: 'absolute',
		left: 0,
	},
	cigarette: {
		flexGrow: 1,
	},
	diagonal: {
		transform: [{ rotate: '45deg' }, { scale: 1 }],
	},
	head: {
		position: 'absolute',
		right: 0,
		top: 0,
		zIndex: 1,
	},
	inner: {
		bottom: 0,
		left: 0,
		overflow: 'hidden',
		position: 'absolute',
	},
})

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:41](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L41)*

#### Type declaration:

* ### **butt**: *object*

  * **bottom**: *number* = 0

  * **left**: *number* = 0

  * **position**: *"absolute"* = "absolute"

* ### **cigarette**: *object*

  * **flexGrow**: *number* = 1

* ### **diagonal**: *object*

  * **transform**: *(object | object)[]* = [{ rotate: '45deg' }, { scale: 1 }]

* ### **head**: *object*

  * **position**: *"absolute"* = "absolute"

  * **right**: *number* = 0

  * **top**: *number* = 0

  * **zIndex**: *number* = 1

* ### **inner**: *object*

  * **bottom**: *number* = 0

  * **left**: *number* = 0

  * **overflow**: *"hidden"* = "hidden"

  * **position**: *"absolute"* = "absolute"

## Functions

###  Cigarette

▸ **Cigarette**(`props`: [CigaretteProps](../interfaces/_packages_ui_src_cigarettes_cigarette_cigarette_.cigaretteprops.md)): *ReactElement*

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:199](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CigaretteProps](../interfaces/_packages_ui_src_cigarettes_cigarette_cigarette_.cigaretteprops.md) |

**Returns:** *ReactElement*

___

###  getCigaretteActualLength

▸ **getCigaretteActualLength**(`fullCigaretteLength`: number, `percentage`: number): *number*

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:76](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L76)*

Given the full length of a cigarette, and the percentage of the cigarette
smoked, get the actual length of the cigarette.

**Parameters:**

Name | Type |
------ | ------ |
`fullCigaretteLength` | number |
`percentage` | number |

**Returns:** *number*

___

###  getContainerStyle

▸ **getContainerStyle**(`orientation`: [CigaretteOrientation](_packages_ui_src_cigarettes_cigarette_cigarette_.md#cigaretteorientation), `fullCigaretteLength`: number): *ViewStyle*

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:92](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`orientation` | [CigaretteOrientation](_packages_ui_src_cigarettes_cigarette_cigarette_.md#cigaretteorientation) |
`fullCigaretteLength` | number |

**Returns:** *ViewStyle*

___

###  renderCigarette

▸ **renderCigarette**(`orientation`: "horizontal" | "vertical", `percentage`: number, `fullCigaretteLength`: number, `additionalStyle?`: StyleProp‹ViewStyle›): *ReactElement*

*Defined in [packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx:121](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/Cigarettes/Cigarette/Cigarette.tsx#L121)*

Render a horizontal or vertical cigarette.

**Parameters:**

Name | Type |
------ | ------ |
`orientation` | "horizontal" &#124; "vertical" |
`percentage` | number |
`fullCigaretteLength` | number |
`additionalStyle?` | StyleProp‹ViewStyle› |

**Returns:** *ReactElement*
