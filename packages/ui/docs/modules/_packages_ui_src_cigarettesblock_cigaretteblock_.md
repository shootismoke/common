[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/CigarettesBlock/CigaretteBlock"](_packages_ui_src_cigarettesblock_cigaretteblock_.md)

# Module: "packages/ui/src/CigarettesBlock/CigaretteBlock"

## Index

### Interfaces

* [CigarettesBlockProps](../interfaces/_packages_ui_src_cigarettesblock_cigaretteblock_.cigarettesblockprops.md)

### Variables

* [styles](_packages_ui_src_cigarettesblock_cigaretteblock_.md#const-styles)

### Functions

* [CigarettesBlock](_packages_ui_src_cigarettesblock_cigaretteblock_.md#cigarettesblock)
* [renderAnimation](_packages_ui_src_cigarettesblock_cigaretteblock_.md#renderanimation)

## Variables

### `Const` styles

• **styles**: *object* = StyleSheet.create({
	animationContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	lottie: {
		backgroundColor: theme.backgroundColor,
	},
	shitText: {
		marginTop: theme.spacing.normal,
	},
})

*Defined in [packages/ui/src/CigarettesBlock/CigaretteBlock.tsx:54](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/CigarettesBlock/CigaretteBlock.tsx#L54)*

#### Type declaration:

* ### **animationContainer**: *object*

  * **display**: *"flex"* = "flex"

  * **justifyContent**: *"flex-end"* = "flex-end"

* ### **lottie**: *object*

  * **backgroundColor**: *string* = theme.backgroundColor

* ### **shitText**: *object*

  * **marginTop**: *number* = theme.spacing.normal

## Functions

###  CigarettesBlock

▸ **CigarettesBlock**(`props`: [CigarettesBlockProps](../interfaces/_packages_ui_src_cigarettesblock_cigaretteblock_.cigarettesblockprops.md)): *ReactElement*

*Defined in [packages/ui/src/CigarettesBlock/CigaretteBlock.tsx:82](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/CigarettesBlock/CigaretteBlock.tsx#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CigarettesBlockProps](../interfaces/_packages_ui_src_cigarettesblock_cigaretteblock_.cigarettesblockprops.md) |

**Returns:** *ReactElement*

___

###  renderAnimation

▸ **renderAnimation**(`cigarettesStyle`: StyleProp‹ViewProps›): *ReactElement*

*Defined in [packages/ui/src/CigarettesBlock/CigaretteBlock.tsx:67](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/CigarettesBlock/CigaretteBlock.tsx#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`cigarettesStyle` | StyleProp‹ViewProps› |

**Returns:** *ReactElement*
