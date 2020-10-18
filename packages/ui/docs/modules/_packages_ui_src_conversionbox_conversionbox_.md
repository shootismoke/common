[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/ConversionBox/ConversionBox"](_packages_ui_src_conversionbox_conversionbox_.md)

# Module: "packages/ui/src/ConversionBox/ConversionBox"

## Index

### Interfaces

* [ConversionBoxProps](../interfaces/_packages_ui_src_conversionbox_conversionbox_.conversionboxprops.md)

### Variables

* [LINE_HEIGHT](_packages_ui_src_conversionbox_conversionbox_.md#const-line_height)
* [styles](_packages_ui_src_conversionbox_conversionbox_.md#const-styles)

### Functions

* [ConversionBox](_packages_ui_src_conversionbox_conversionbox_.md#conversionbox)

## Variables

### `Const` LINE_HEIGHT

• **LINE_HEIGHT**: *44* = 44

*Defined in [packages/ui/src/ConversionBox/ConversionBox.tsx:41](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/ConversionBox/ConversionBox.tsx#L41)*

Height of the cigarette image, also the line height of the "22" text.

___

### `Const` styles

• **styles**: *object* = StyleSheet.create({
	box: {
		borderColor: '#EAEAEA',
		borderRadius: 8,
		borderWidth: 1,
		backgroundColor: 'white',
		marginTop: 20,
		marginBottom: 10,
		padding: 10,
	},
	boxDescription: {
		...theme.text,
		fontSize: 9,
		lineHeight: 16,
		marginTop: 15,
	},
	cigarette: {
		bottom: 12,
		height: LINE_HEIGHT,
		left: 6,
		position: 'absolute',
		width: LINE_HEIGHT,
	},
	equal: {
		...theme.text,
		color: theme.textColor,
		fontSize: LINE_HEIGHT,
		lineHeight: LINE_HEIGHT,
		marginHorizontal: 18,
	},
	equivalence: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	label: {
		...theme.title,
		fontSize: 12,
		fontWeight: '900',
		letterSpacing: 0.5,
	},
	micro: {
		fontFamily: 'arial',
		...Platform.select({
			ios: {
				fontFamily: 'Georgia',
			},
			android: {
				fontFamily: 'normal',
			},
		}),
	},
	statisticsLeft: {
		alignItems: 'flex-end',
		marginTop: 36,
		paddingRight: 10,
		width: 90,
	},
	statisticsRight: {
		alignItems: 'center', // For mobile
		textAlign: 'center', // For web
		width: 90,
	},
	value: {
		...theme.text,
		color: theme.textColor,
		fontSize: LINE_HEIGHT,
		fontWeight: '800' as const,
		lineHeight: LINE_HEIGHT,
	},
})

*Defined in [packages/ui/src/ConversionBox/ConversionBox.tsx:43](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/ConversionBox/ConversionBox.tsx#L43)*

#### Type declaration:

* ### **box**: *object*

  * **backgroundColor**: *string* = "white"

  * **borderColor**: *string* = "#EAEAEA"

  * **borderRadius**: *number* = 8

  * **borderWidth**: *number* = 1

  * **marginBottom**: *number* = 10

  * **marginTop**: *number* = 20

  * **padding**: *number* = 10

* ### **boxDescription**: *object*

  * **fontSize**: *number* = 9

  * **lineHeight**: *number* = 16

  * **marginTop**: *number* = 15

* ### **cigarette**: *object*

  * **bottom**: *number* = 12

  * **height**: *number* = LINE_HEIGHT

  * **left**: *number* = 6

  * **position**: *"absolute"* = "absolute"

  * **width**: *number* = LINE_HEIGHT

* ### **equal**: *object*

  * **color**: *string* = theme.textColor

  * **fontSize**: *number* = LINE_HEIGHT

  * **lineHeight**: *number* = LINE_HEIGHT

  * **marginHorizontal**: *number* = 18

* ### **equivalence**: *object*

  * **alignItems**: *"center"* = "center"

  * **display**: *"flex"* = "flex"

  * **flexDirection**: *"row"* = "row"

  * **justifyContent**: *"center"* = "center"

* ### **label**: *object*

  * **fontSize**: *number* = 12

  * **fontWeight**: *"900"* = "900"

  * **letterSpacing**: *number* = 0.5

* ### **micro**: *object*

  * **fontFamily**: *string* = "arial"

* ### **statisticsLeft**: *object*

  * **alignItems**: *"flex-end"* = "flex-end"

  * **marginTop**: *number* = 36

  * **paddingRight**: *number* = 10

  * **width**: *number* = 90

* ### **statisticsRight**: *object*

  * **alignItems**: *"center"* = "center"

  * **textAlign**: *"center"* = "center"

  * **width**: *number* = 90

* ### **value**: *object*

  * **color**: *string* = theme.textColor

  * **fontSize**: *number* = LINE_HEIGHT

  * **fontWeight**: *"800"* = '800' as const

  * **lineHeight**: *number* = LINE_HEIGHT

## Functions

###  ConversionBox

▸ **ConversionBox**(`props`: [ConversionBoxProps](../interfaces/_packages_ui_src_conversionbox_conversionbox_.conversionboxprops.md)): *ReactElement*

*Defined in [packages/ui/src/ConversionBox/ConversionBox.tsx:116](https://github.com/shootismoke/common/blob/29c80cb/packages/ui/src/ConversionBox/ConversionBox.tsx#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ConversionBoxProps](../interfaces/_packages_ui_src_conversionbox_conversionbox_.conversionboxprops.md) |

**Returns:** *ReactElement*
