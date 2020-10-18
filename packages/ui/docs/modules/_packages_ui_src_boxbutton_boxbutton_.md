[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/BoxButton/BoxButton"](_packages_ui_src_boxbutton_boxbutton_.md)

# Module: "packages/ui/src/BoxButton/BoxButton"

## Index

### Interfaces

* [BoxButtonProps](../interfaces/_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md)

### Variables

* [styles](_packages_ui_src_boxbutton_boxbutton_.md#const-styles)

### Functions

* [BoxButton](_packages_ui_src_boxbutton_boxbutton_.md#boxbutton)

## Variables

### `Const` styles

• **styles**: *object* = StyleSheet.create({
	activeText: {
		opacity: 1,
	},
	boxButton: {
		...theme.elevationShadowStyle(3),
		backgroundColor: 'white',
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 12,
		borderWidth: 1,
		marginBottom: theme.spacing.mini,
		paddingHorizontal: theme.spacing.small,
		paddingVertical: 6, // Padding for the shadow
		shadowOpacity: 0.1,
	},
	boxButtonText: {
		...theme.shitText,
		opacity: theme.disabledOpacity,
		textAlign: 'center',
	},
})

*Defined in [packages/ui/src/BoxButton/BoxButton.tsx:33](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/BoxButton/BoxButton.tsx#L33)*

#### Type declaration:

* ### **activeText**: *object*

  * **opacity**: *number* = 1

* ### **boxButton**: *object*

  * **backgroundColor**: *string* = "white"

  * **borderColor**: *string* = "rgba(0, 0, 0, 0.1)"

  * **borderRadius**: *number* = 12

  * **borderWidth**: *number* = 1

  * **marginBottom**: *number* = theme.spacing.mini

  * **paddingHorizontal**: *number* = theme.spacing.small

  * **paddingVertical**: *number* = 6

  * **shadowOpacity**: *number* = 0.1

* ### **boxButtonText**: *object*

  * **opacity**: *number* = theme.disabledOpacity

  * **textAlign**: *"center"* = "center"

## Functions

###  BoxButton

▸ **BoxButton**(`props`: [BoxButtonProps](../interfaces/_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md)): *ReactElement*

*Defined in [packages/ui/src/BoxButton/BoxButton.tsx:55](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/BoxButton/BoxButton.tsx#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [BoxButtonProps](../interfaces/_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md) |

**Returns:** *ReactElement*
