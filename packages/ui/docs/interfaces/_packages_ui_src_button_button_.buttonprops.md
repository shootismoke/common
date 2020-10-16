[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/Button/Button"](../modules/_packages_ui_src_button_button_.md) › [ButtonProps](_packages_ui_src_button_button_.buttonprops.md)

# Interface: ButtonProps

## Hierarchy

* TouchableOpacityProps

  ↳ **ButtonProps**

## Index

### Properties

* [accessibilityActions](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityactions)
* [accessibilityComponentType](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilitycomponenttype)
* [accessibilityElementsHidden](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityelementshidden)
* [accessibilityHint](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityhint)
* [accessibilityIgnoresInvertColors](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityignoresinvertcolors)
* [accessibilityLabel](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilitylabel)
* [accessibilityLiveRegion](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityliveregion)
* [accessibilityRole](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityrole)
* [accessibilityState](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilitystate)
* [accessibilityTraits](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilitytraits)
* [accessibilityValue](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityvalue)
* [accessibilityViewIsModal](_packages_ui_src_button_button_.buttonprops.md#optional-accessibilityviewismodal)
* [accessible](_packages_ui_src_button_button_.buttonprops.md#optional-accessible)
* [activeOpacity](_packages_ui_src_button_button_.buttonprops.md#optional-activeopacity)
* [as](_packages_ui_src_button_button_.buttonprops.md#optional-as)
* [children](_packages_ui_src_button_button_.buttonprops.md#optional-children)
* [delayLongPress](_packages_ui_src_button_button_.buttonprops.md#optional-delaylongpress)
* [delayPressIn](_packages_ui_src_button_button_.buttonprops.md#optional-delaypressin)
* [delayPressOut](_packages_ui_src_button_button_.buttonprops.md#optional-delaypressout)
* [disabled](_packages_ui_src_button_button_.buttonprops.md#optional-disabled)
* [hasTVPreferredFocus](_packages_ui_src_button_button_.buttonprops.md#optional-hastvpreferredfocus)
* [hitSlop](_packages_ui_src_button_button_.buttonprops.md#optional-hitslop)
* [icon](_packages_ui_src_button_button_.buttonprops.md#optional-icon)
* [importantForAccessibility](_packages_ui_src_button_button_.buttonprops.md#optional-importantforaccessibility)
* [onAccessibilityAction](_packages_ui_src_button_button_.buttonprops.md#optional-onaccessibilityaction)
* [onAccessibilityEscape](_packages_ui_src_button_button_.buttonprops.md#optional-onaccessibilityescape)
* [onAccessibilityTap](_packages_ui_src_button_button_.buttonprops.md#optional-onaccessibilitytap)
* [onBlur](_packages_ui_src_button_button_.buttonprops.md#optional-onblur)
* [onFocus](_packages_ui_src_button_button_.buttonprops.md#optional-onfocus)
* [onLayout](_packages_ui_src_button_button_.buttonprops.md#optional-onlayout)
* [onLongPress](_packages_ui_src_button_button_.buttonprops.md#optional-onlongpress)
* [onMagicTap](_packages_ui_src_button_button_.buttonprops.md#optional-onmagictap)
* [onPress](_packages_ui_src_button_button_.buttonprops.md#optional-onpress)
* [onPressIn](_packages_ui_src_button_button_.buttonprops.md#optional-onpressin)
* [onPressOut](_packages_ui_src_button_button_.buttonprops.md#optional-onpressout)
* [pressRetentionOffset](_packages_ui_src_button_button_.buttonprops.md#optional-pressretentionoffset)
* [style](_packages_ui_src_button_button_.buttonprops.md#optional-style)
* [testID](_packages_ui_src_button_button_.buttonprops.md#optional-testid)
* [textStyle](_packages_ui_src_button_button_.buttonprops.md#optional-textstyle)
* [touchSoundDisabled](_packages_ui_src_button_button_.buttonprops.md#optional-touchsounddisabled)
* [tvParallaxProperties](_packages_ui_src_button_button_.buttonprops.md#optional-tvparallaxproperties)
* [type](_packages_ui_src_button_button_.buttonprops.md#optional-type)

## Properties

### `Optional` accessibilityActions

• **accessibilityActions**? : *ReadonlyArray‹AccessibilityActionInfo›*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityActions](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityactions)*

Defined in node_modules/@types/react-native/index.d.ts:2212

Provides an array of custom actions available for accessibility.

___

### `Optional` accessibilityComponentType

• **accessibilityComponentType**? : *"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityComponentType](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilitycomponenttype)*

Defined in node_modules/@types/react-native/index.d.ts:2366

In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a “button”).
If we were using native buttons, this would work automatically. Since we are using javascript, we need to
provide a bit more context for TalkBack. To do so, you must specify the ‘accessibilityComponentType’ property
for any UI component. For instances, we support ‘button’, ‘radiobutton_checked’ and ‘radiobutton_unchecked’ and so on.

**`platform`** android

___

### `Optional` accessibilityElementsHidden

• **accessibilityElementsHidden**? : *undefined | false | true*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityElementsHidden](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityelementshidden)*

Defined in node_modules/@types/react-native/index.d.ts:2396

A Boolean value indicating whether the accessibility elements contained within this accessibility element
are hidden to the screen reader.

**`platform`** ios

___

### `Optional` accessibilityHint

• **accessibilityHint**? : *undefined | string*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityHint](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityhint)*

Defined in node_modules/@types/react-native/index.d.ts:2231

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

___

### `Optional` accessibilityIgnoresInvertColors

• **accessibilityIgnoresInvertColors**? : *undefined | false | true*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityIgnoresInvertColors](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityignoresinvertcolors)*

Defined in node_modules/@types/react-native/index.d.ts:2433

https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios

**`platform`** ios

___

### `Optional` accessibilityLabel

• **accessibilityLabel**? : *undefined | string*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityLabel](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilitylabel)*

Defined in node_modules/@types/react-native/index.d.ts:2218

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

___

### `Optional` accessibilityLiveRegion

• **accessibilityLiveRegion**? : *"none" | "polite" | "assertive"*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityLiveRegion](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityliveregion)*

Defined in node_modules/@types/react-native/index.d.ts:2374

Indicates to accessibility services whether the user should be notified when this view changes.
Works for Android API >= 19 only.
See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.

**`platform`** android

___

### `Optional` accessibilityRole

• **accessibilityRole**? : *AccessibilityRole*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityRole](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityrole)*

Defined in node_modules/@types/react-native/index.d.ts:2223

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

___

### `Optional` accessibilityState

• **accessibilityState**? : *AccessibilityState*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityState](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilitystate)*

Defined in node_modules/@types/react-native/index.d.ts:2227

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

___

### `Optional` accessibilityTraits

• **accessibilityTraits**? : *AccessibilityTrait | AccessibilityTrait[]*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityTraits](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilitytraits)*

Defined in node_modules/@types/react-native/index.d.ts:2403

Accessibility traits tell a person using VoiceOver what kind of element they have selected.
Is this element a label? A button? A header? These questions are answered by accessibilityTraits.

**`platform`** ios

___

### `Optional` accessibilityValue

• **accessibilityValue**? : *AccessibilityValue*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityValue](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityvalue)*

Defined in node_modules/@types/react-native/index.d.ts:2236

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
it contains range information (minimum, current, and maximum).

___

### `Optional` accessibilityViewIsModal

• **accessibilityViewIsModal**? : *undefined | false | true*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessibilityViewIsModal](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessibilityviewismodal)*

Defined in node_modules/@types/react-native/index.d.ts:2409

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

**`platform`** ios

___

### `Optional` accessible

• **accessible**? : *undefined | false | true*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[accessible](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-accessible)*

Defined in node_modules/@types/react-native/index.d.ts:2207

When true, indicates that the view is an accessibility element.
By default, all the touchable elements are accessible.

___

### `Optional` activeOpacity

• **activeOpacity**? : *undefined | number*

*Inherited from [ButtonProps](_packages_ui_src_button_button_.buttonprops.md).[activeOpacity](_packages_ui_src_button_button_.buttonprops.md#optional-activeopacity)*

Defined in node_modules/@types/react-native/index.d.ts:5315

Determines what the opacity of the wrapped view should be when touch is active.
Defaults to 0.2

___

### `Optional` as

• **as**? : *typeof View*

*Defined in [packages/ui/src/Button/Button.tsx:32](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/Button/Button.tsx#L32)*

___

### `Optional` children

• **children**? : *string | ReactElement*

*Defined in [packages/ui/src/Button/Button.tsx:33](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/Button/Button.tsx#L33)*

___

### `Optional` delayLongPress

• **delayLongPress**? : *undefined | number*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[delayLongPress](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-delaylongpress)*

Defined in node_modules/@types/react-native/index.d.ts:5164

Delay in ms, from onPressIn, before onLongPress is called.

___

### `Optional` delayPressIn

• **delayPressIn**? : *undefined | number*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[delayPressIn](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-delaypressin)*

Defined in node_modules/@types/react-native/index.d.ts:5169

Delay in ms, from the start of the touch, before onPressIn is called.

___

### `Optional` delayPressOut

• **delayPressOut**? : *undefined | number*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[delayPressOut](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-delaypressout)*

Defined in node_modules/@types/react-native/index.d.ts:5174

Delay in ms, from the release of the touch, before onPressOut is called.

___

### `Optional` disabled

• **disabled**? : *boolean | null*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[disabled](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-disabled)*

Defined in node_modules/@types/react-native/index.d.ts:5179

If true, disable all interactions for this component.

___

### `Optional` hasTVPreferredFocus

• **hasTVPreferredFocus**? : *undefined | false | true*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[hasTVPreferredFocus](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-hastvpreferredfocus)*

Defined in node_modules/@types/react-native/index.d.ts:5126

*(Apple TV only)* TV preferred focus (see documentation for the View component).

**`platform`** ios

___

### `Optional` hitSlop

• **hitSlop**? : *Insets*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[hitSlop](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-hitslop)*

Defined in node_modules/@types/react-native/index.d.ts:5188

This defines how far your touch can start away from the button.
This is added to pressRetentionOffset when moving off of the button.
NOTE The touch area never extends past the parent view bounds and
the Z-index of sibling views always takes precedence if a touch hits
two overlapping views.

___

### `Optional` icon

• **icon**? : *undefined | string*

*Defined in [packages/ui/src/Button/Button.tsx:34](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/Button/Button.tsx#L34)*

___

### `Optional` importantForAccessibility

• **importantForAccessibility**? : *"auto" | "yes" | "no" | "no-hide-descendants"*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[importantForAccessibility](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-importantforaccessibility)*

Defined in node_modules/@types/react-native/index.d.ts:2387

Controls how view is important for accessibility which is if it fires accessibility events
and if it is reported to accessibility services that query the screen.
Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.

Possible values:
     'auto' - The system determines whether the view is important for accessibility - default (recommended).
     'yes' - The view is important for accessibility.
     'no' - The view is not important for accessibility.
     'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.

___

### `Optional` onAccessibilityAction

• **onAccessibilityAction**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onAccessibilityAction](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onaccessibilityaction)*

Defined in node_modules/@types/react-native/index.d.ts:2241

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

___

### `Optional` onAccessibilityEscape

• **onAccessibilityEscape**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onAccessibilityEscape](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onaccessibilityescape)*

Defined in node_modules/@types/react-native/index.d.ts:2415

When accessibile is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).

**`platform`** ios

___

### `Optional` onAccessibilityTap

• **onAccessibilityTap**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onAccessibilityTap](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onaccessibilitytap)*

Defined in node_modules/@types/react-native/index.d.ts:2421

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

**`platform`** ios

___

### `Optional` onBlur

• **onBlur**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onBlur](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onblur)*

Defined in node_modules/@types/react-native/index.d.ts:5195

When `accessible` is true (which is the default) this may be called when
the OS-specific concept of "blur" occurs, meaning the element lost focus.
Some platforms may not have the concept of blur.

___

### `Optional` onFocus

• **onFocus**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onFocus](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onfocus)*

Defined in node_modules/@types/react-native/index.d.ts:5202

When `accessible` is true (which is the default) this may be called when
the OS-specific concept of "focus" occurs. Some platforms may not have
the concept of focus.

___

### `Optional` onLayout

• **onLayout**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onLayout](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onlayout)*

Defined in node_modules/@types/react-native/index.d.ts:5208

Invoked on mount and layout changes with
{nativeEvent: {layout: {x, y, width, height}}}

___

### `Optional` onLongPress

• **onLongPress**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onLongPress](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onlongpress)*

Defined in node_modules/@types/react-native/index.d.ts:5210

___

### `Optional` onMagicTap

• **onMagicTap**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onMagicTap](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onmagictap)*

Defined in node_modules/@types/react-native/index.d.ts:2427

When accessible is true, the system will invoke this function when the user performs the magic tap gesture.

**`platform`** ios

___

### `Optional` onPress

• **onPress**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onPress](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onpress)*

Defined in node_modules/@types/react-native/index.d.ts:5216

Called when the touch is released,
but not if cancelled (e.g. by a scroll that steals the responder lock).

___

### `Optional` onPressIn

• **onPressIn**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onPressIn](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onpressin)*

Defined in node_modules/@types/react-native/index.d.ts:5218

___

### `Optional` onPressOut

• **onPressOut**? : *undefined | function*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[onPressOut](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-onpressout)*

Defined in node_modules/@types/react-native/index.d.ts:5220

___

### `Optional` pressRetentionOffset

• **pressRetentionOffset**? : *Insets*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[pressRetentionOffset](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-pressretentionoffset)*

Defined in node_modules/@types/react-native/index.d.ts:5235

When the scroll view is disabled, this defines how far your
touch may move off of the button, before deactivating the button.
Once deactivated, try moving it back and you'll see that the button
is once again reactivated! Move it back and forth several times
while the scroll view is disabled. Ensure you pass in a constant
to reduce memory allocations.

___

### `Optional` style

• **style**? : *StyleProp‹ViewStyle›*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[style](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-style)*

Defined in node_modules/@types/react-native/index.d.ts:5225

//FIXME: not in doc but available in examples

___

### `Optional` testID

• **testID**? : *undefined | string*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[testID](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-testid)*

Defined in node_modules/@types/react-native/index.d.ts:5240

Used to locate this view in end-to-end tests.

___

### `Optional` textStyle

• **textStyle**? : *StyleProp‹TextStyle›*

*Defined in [packages/ui/src/Button/Button.tsx:35](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/Button/Button.tsx#L35)*

___

### `Optional` touchSoundDisabled

• **touchSoundDisabled**? : *boolean | null*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[touchSoundDisabled](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-touchsounddisabled)*

Defined in node_modules/@types/react-native/index.d.ts:5151

If true, doesn't play a system sound on touch.

**`platform`** android

___

### `Optional` tvParallaxProperties

• **tvParallaxProperties**? : *TVParallaxProperties*

*Inherited from [BoxButtonProps](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md).[tvParallaxProperties](_packages_ui_src_boxbutton_boxbutton_.boxbuttonprops.md#optional-tvparallaxproperties)*

Defined in node_modules/@types/react-native/index.d.ts:5142

*(Apple TV only)* Object with properties to control Apple TV parallax effects.

enabled: If true, parallax effects are enabled.  Defaults to true.
shiftDistanceX: Defaults to 2.0.
shiftDistanceY: Defaults to 2.0.
tiltAngle: Defaults to 0.05.
magnification: Defaults to 1.0.
pressMagnification: Defaults to 1.0.
pressDuration: Defaults to 0.3.
pressDelay: Defaults to 0.0.

**`platform`** ios

___

### `Optional` type

• **type**? : *"primary" | "secondary" | "full"*

*Defined in [packages/ui/src/Button/Button.tsx:36](https://github.com/shootismoke/common/blob/72777b1/packages/ui/src/Button/Button.tsx#L36)*
