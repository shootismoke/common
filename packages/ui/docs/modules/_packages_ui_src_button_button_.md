[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/Button/Button"](_packages_ui_src_button_button_.md)

# Module: "packages/ui/src/Button/Button"

## Index

### Interfaces

* [ButtonProps](../interfaces/_packages_ui_src_button_button_.buttonprops.md)

### Variables

* [styles](_packages_ui_src_button_button_.md#const-styles)

### Functions

* [Button](_packages_ui_src_button_button_.md#button)

## Variables

### `Const` styles

• **styles**: *object* = StyleSheet.create({
	button: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: theme.spacing.mini,
	},
	buttonText: {
		...theme.title,
		color: theme.primaryColor,
	},
	buttonTextFull: {
		...theme.title,
		color: 'white',
	},
	full: {
		backgroundColor: theme.primaryColor,
		borderColor: theme.primaryColor,
		borderRadius: 24,
		borderWidth: 2,
	},
	icon: {
		marginRight: theme.spacing.mini,
	},
	primary: {
		borderColor: theme.primaryColor,
		borderRadius: 24,
		borderWidth: 2,
	},
})

*Defined in [packages/ui/src/Button/Button.tsx:39](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/Button/Button.tsx#L39)*

#### Type declaration:

* ### **button**: *object*

  * **alignItems**: *"center"* = "center"

  * **flexDirection**: *"row"* = "row"

  * **justifyContent**: *"space-around"* = "space-around"

  * **paddingVertical**: *number* = theme.spacing.mini

* ### **buttonText**: *object*

  * **color**: *string* = theme.primaryColor

* ### **buttonTextFull**: *object*

  * **color**: *string* = "white"

* ### **full**: *object*

  * **backgroundColor**: *string* = theme.primaryColor

  * **borderColor**: *string* = theme.primaryColor

  * **borderRadius**: *number* = 24

  * **borderWidth**: *number* = 2

* ### **icon**: *object*

  * **marginRight**: *number* = theme.spacing.mini

* ### **primary**: *object*

  * **borderColor**: *string* = theme.primaryColor

  * **borderRadius**: *number* = 24

  * **borderWidth**: *number* = 2

## Functions

###  Button

▸ **Button**(`props`: [ButtonProps](../interfaces/_packages_ui_src_button_button_.buttonprops.md)): *ReactElement*

*Defined in [packages/ui/src/Button/Button.tsx:70](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/Button/Button.tsx#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ButtonProps](../interfaces/_packages_ui_src_button_button_.buttonprops.md) |

**Returns:** *ReactElement*
