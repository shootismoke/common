[@shootismoke/ui](../README.md) / [Exports](../modules.md) / [components/Cigarettes/Cigarettes](../modules/components_cigarettes_cigarettes.md) / CigarettesProps

# Interface: CigarettesProps

[components/Cigarettes/Cigarettes](../modules/components_cigarettes_cigarettes.md).CigarettesProps

## Hierarchy

* *ViewProps*

  ↳ **CigarettesProps**

## Table of contents

### Properties

- [accessibilityActions](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityactions)
- [accessibilityElementsHidden](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityelementshidden)
- [accessibilityHint](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityhint)
- [accessibilityIgnoresInvertColors](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityignoresinvertcolors)
- [accessibilityLabel](components_cigarettes_cigarettes.cigarettesprops.md#accessibilitylabel)
- [accessibilityLiveRegion](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityliveregion)
- [accessibilityRole](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityrole)
- [accessibilityState](components_cigarettes_cigarettes.cigarettesprops.md#accessibilitystate)
- [accessibilityValue](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityvalue)
- [accessibilityViewIsModal](components_cigarettes_cigarettes.cigarettesprops.md#accessibilityviewismodal)
- [accessible](components_cigarettes_cigarettes.cigarettesprops.md#accessible)
- [cigaretteStyle](components_cigarettes_cigarettes.cigarettesprops.md#cigarettestyle)
- [cigarettes](components_cigarettes_cigarettes.cigarettesprops.md#cigarettes)
- [collapsable](components_cigarettes_cigarettes.cigarettesprops.md#collapsable)
- [focusable](components_cigarettes_cigarettes.cigarettesprops.md#focusable)
- [fullCigaretteLength](components_cigarettes_cigarettes.cigarettesprops.md#fullcigarettelength)
- [hasTVPreferredFocus](components_cigarettes_cigarettes.cigarettesprops.md#hastvpreferredfocus)
- [hitSlop](components_cigarettes_cigarettes.cigarettesprops.md#hitslop)
- [importantForAccessibility](components_cigarettes_cigarettes.cigarettesprops.md#importantforaccessibility)
- [isTVSelectable](components_cigarettes_cigarettes.cigarettesprops.md#istvselectable)
- [nativeID](components_cigarettes_cigarettes.cigarettesprops.md#nativeid)
- [needsOffscreenAlphaCompositing](components_cigarettes_cigarettes.cigarettesprops.md#needsoffscreenalphacompositing)
- [onAccessibilityAction](components_cigarettes_cigarettes.cigarettesprops.md#onaccessibilityaction)
- [onAccessibilityEscape](components_cigarettes_cigarettes.cigarettesprops.md#onaccessibilityescape)
- [onAccessibilityTap](components_cigarettes_cigarettes.cigarettesprops.md#onaccessibilitytap)
- [onLayout](components_cigarettes_cigarettes.cigarettesprops.md#onlayout)
- [onMagicTap](components_cigarettes_cigarettes.cigarettesprops.md#onmagictap)
- [onMoveShouldSetResponder](components_cigarettes_cigarettes.cigarettesprops.md#onmoveshouldsetresponder)
- [onMoveShouldSetResponderCapture](components_cigarettes_cigarettes.cigarettesprops.md#onmoveshouldsetrespondercapture)
- [onResponderEnd](components_cigarettes_cigarettes.cigarettesprops.md#onresponderend)
- [onResponderGrant](components_cigarettes_cigarettes.cigarettesprops.md#onrespondergrant)
- [onResponderMove](components_cigarettes_cigarettes.cigarettesprops.md#onrespondermove)
- [onResponderReject](components_cigarettes_cigarettes.cigarettesprops.md#onresponderreject)
- [onResponderRelease](components_cigarettes_cigarettes.cigarettesprops.md#onresponderrelease)
- [onResponderStart](components_cigarettes_cigarettes.cigarettesprops.md#onresponderstart)
- [onResponderTerminate](components_cigarettes_cigarettes.cigarettesprops.md#onresponderterminate)
- [onResponderTerminationRequest](components_cigarettes_cigarettes.cigarettesprops.md#onresponderterminationrequest)
- [onStartShouldSetResponder](components_cigarettes_cigarettes.cigarettesprops.md#onstartshouldsetresponder)
- [onStartShouldSetResponderCapture](components_cigarettes_cigarettes.cigarettesprops.md#onstartshouldsetrespondercapture)
- [onTouchCancel](components_cigarettes_cigarettes.cigarettesprops.md#ontouchcancel)
- [onTouchEnd](components_cigarettes_cigarettes.cigarettesprops.md#ontouchend)
- [onTouchEndCapture](components_cigarettes_cigarettes.cigarettesprops.md#ontouchendcapture)
- [onTouchMove](components_cigarettes_cigarettes.cigarettesprops.md#ontouchmove)
- [onTouchStart](components_cigarettes_cigarettes.cigarettesprops.md#ontouchstart)
- [pointerEvents](components_cigarettes_cigarettes.cigarettesprops.md#pointerevents)
- [removeClippedSubviews](components_cigarettes_cigarettes.cigarettesprops.md#removeclippedsubviews)
- [renderToHardwareTextureAndroid](components_cigarettes_cigarettes.cigarettesprops.md#rendertohardwaretextureandroid)
- [shouldRasterizeIOS](components_cigarettes_cigarettes.cigarettesprops.md#shouldrasterizeios)
- [showMaxCigarettes](components_cigarettes_cigarettes.cigarettesprops.md#showmaxcigarettes)
- [showVerticalAfter](components_cigarettes_cigarettes.cigarettesprops.md#showverticalafter)
- [spacingHorizontal](components_cigarettes_cigarettes.cigarettesprops.md#spacinghorizontal)
- [spacingVertical](components_cigarettes_cigarettes.cigarettesprops.md#spacingvertical)
- [style](components_cigarettes_cigarettes.cigarettesprops.md#style)
- [testID](components_cigarettes_cigarettes.cigarettesprops.md#testid)
- [tvParallaxMagnification](components_cigarettes_cigarettes.cigarettesprops.md#tvparallaxmagnification)
- [tvParallaxProperties](components_cigarettes_cigarettes.cigarettesprops.md#tvparallaxproperties)
- [tvParallaxShiftDistanceX](components_cigarettes_cigarettes.cigarettesprops.md#tvparallaxshiftdistancex)
- [tvParallaxShiftDistanceY](components_cigarettes_cigarettes.cigarettesprops.md#tvparallaxshiftdistancey)
- [tvParallaxTiltAngle](components_cigarettes_cigarettes.cigarettesprops.md#tvparallaxtiltangle)

## Properties

### accessibilityActions

• `Optional` **accessibilityActions**: *undefined* \| readonly *Readonly*<{ `label?`: *undefined* \| *string* ; `name`: *string*  }\>[]

Provides an array of custom actions available for accessibility.

Defined in: node_modules/@types/react-native/index.d.ts:2229

___

### accessibilityElementsHidden

• `Optional` **accessibilityElementsHidden**: *undefined* \| *boolean*

A Boolean value indicating whether the accessibility elements contained within this accessibility element
are hidden to the screen reader.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2404

___

### accessibilityHint

• `Optional` **accessibilityHint**: *undefined* \| *string*

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

Defined in: node_modules/@types/react-native/index.d.ts:2248

___

### accessibilityIgnoresInvertColors

• `Optional` **accessibilityIgnoresInvertColors**: *undefined* \| *boolean*

https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolorsios

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2434

___

### accessibilityLabel

• `Optional` **accessibilityLabel**: *undefined* \| *string*

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

Defined in: node_modules/@types/react-native/index.d.ts:2235

___

### accessibilityLiveRegion

• `Optional` **accessibilityLiveRegion**: *undefined* \| *none* \| *polite* \| *assertive*

Indicates to accessibility services whether the user should be notified when this view changes.
Works for Android API >= 19 only.
See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.

**`platform`** android

Defined in: node_modules/@types/react-native/index.d.ts:2382

___

### accessibilityRole

• `Optional` **accessibilityRole**: *undefined* \| *none* \| *button* \| *link* \| *search* \| *image* \| *keyboardkey* \| *text* \| *adjustable* \| *imagebutton* \| *header* \| *summary* \| *alert* \| *checkbox* \| *combobox* \| *menu* \| *menubar* \| *menuitem* \| *progressbar* \| *radio* \| *radiogroup* \| *scrollbar* \| *spinbutton* \| *switch* \| *tab* \| *tablist* \| *timer* \| *toolbar*

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

Defined in: node_modules/@types/react-native/index.d.ts:2240

___

### accessibilityState

• `Optional` **accessibilityState**: *undefined* \| AccessibilityState

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

Defined in: node_modules/@types/react-native/index.d.ts:2244

___

### accessibilityValue

• `Optional` **accessibilityValue**: *undefined* \| AccessibilityValue

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
it contains range information (minimum, current, and maximum).

Defined in: node_modules/@types/react-native/index.d.ts:2253

___

### accessibilityViewIsModal

• `Optional` **accessibilityViewIsModal**: *undefined* \| *boolean*

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2410

___

### accessible

• `Optional` **accessible**: *undefined* \| *boolean*

When true, indicates that the view is an accessibility element.
By default, all the touchable elements are accessible.

Defined in: node_modules/@types/react-native/index.d.ts:2224

___

### cigaretteStyle

• `Optional` **cigaretteStyle**: *StyleProp*<ViewProps\>

Additional styling for inner cigarettes

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:31](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L31)

___

### cigarettes

• **cigarettes**: *number*

The number of cigarettes to show.

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:27](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L27)

___

### collapsable

• `Optional` **collapsable**: *undefined* \| *boolean*

Views that are only used to layout their children or otherwise don't draw anything
may be automatically removed from the native hierarchy as an optimization.
Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.

Defined in: node_modules/@types/react-native/index.d.ts:2177

___

### focusable

• `Optional` **focusable**: *undefined* \| *boolean*

Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

Defined in: node_modules/@types/react-native/index.d.ts:2207

___

### fullCigaretteLength

• `Optional` **fullCigaretteLength**: *undefined* \| *number*

Length, in pixels, of a full cigarette.

**`default`** 90

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:37](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L37)

___

### hasTVPreferredFocus

• `Optional` **hasTVPreferredFocus**: *undefined* \| *boolean*

*(Apple TV only)* May be set to true to force the Apple TV focus engine to move focus to this view.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2119

___

### hitSlop

• `Optional` **hitSlop**: *undefined* \| Insets

This defines how far a touch event can start away from the view.
Typical interface guidelines recommend touch targets that are at least
30 - 40 points/density-independent pixels. If a Touchable view has
a height of 20 the touchable height can be extended to 40 with
hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
NOTE The touch area never extends past the parent view bounds and
the Z-index of sibling views always takes precedence if a touch
hits two overlapping views.

Defined in: node_modules/@types/react-native/index.d.ts:2456

___

### importantForAccessibility

• `Optional` **importantForAccessibility**: *undefined* \| *auto* \| *yes* \| *no* \| *no-hide-descendants*

Controls how view is important for accessibility which is if it fires accessibility events
and if it is reported to accessibility services that query the screen.
Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.

Possible values:
     'auto' - The system determines whether the view is important for accessibility - default (recommended).
     'yes' - The view is important for accessibility.
     'no' - The view is not important for accessibility.
     'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.

Defined in: node_modules/@types/react-native/index.d.ts:2395

___

### isTVSelectable

• `Optional` **isTVSelectable**: *undefined* \| *boolean*

*(Apple TV only)* When set to true, this view will be focusable
and navigable using the Apple TV remote.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2112

___

### nativeID

• `Optional` **nativeID**: *undefined* \| *string*

Used to reference react managed views from native code.

Defined in: node_modules/@types/react-native/index.d.ts:2508

___

### needsOffscreenAlphaCompositing

• `Optional` **needsOffscreenAlphaCompositing**: *undefined* \| *boolean*

Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.
The default (false) falls back to drawing the component and its children
with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.
This default may be noticeable and undesired in the case where the View you are setting an opacity on
has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).

Rendering offscreen to preserve correct alpha behavior is extremely expensive
and hard to debug for non-native developers, which is why it is not turned on by default.
If you do need to enable this property for an animation,
consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).
If that property is enabled, this View will be rendered off-screen once,
saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.

Defined in: node_modules/@types/react-native/index.d.ts:2193

___

### onAccessibilityAction

• `Optional` **onAccessibilityAction**: *undefined* \| (`event`: AccessibilityActionEvent) => *void*

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

Defined in: node_modules/@types/react-native/index.d.ts:2258

___

### onAccessibilityEscape

• `Optional` **onAccessibilityEscape**: *undefined* \| () => *void*

When accessibile is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2416

___

### onAccessibilityTap

• `Optional` **onAccessibilityTap**: *undefined* \| () => *void*

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2422

___

### onLayout

• `Optional` **onLayout**: *undefined* \| (`event`: LayoutChangeEvent) => *void*

Invoked on mount and layout changes with

{nativeEvent: { layout: {x, y, width, height}}}.

Defined in: node_modules/@types/react-native/index.d.ts:2463

___

### onMagicTap

• `Optional` **onMagicTap**: *undefined* \| () => *void*

When accessible is true, the system will invoke this function when the user performs the magic tap gesture.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2428

___

### onMoveShouldSetResponder

• `Optional` **onMoveShouldSetResponder**: *undefined* \| (`event`: *GestureResponderEvent*) => *boolean*

Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?

Defined in: node_modules/@types/react-native/index.d.ts:1942

___

### onMoveShouldSetResponderCapture

• `Optional` **onMoveShouldSetResponderCapture**: *undefined* \| (`event`: *GestureResponderEvent*) => *boolean*

onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
where the deepest node is called first.
That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
This is desirable in most cases, because it makes sure all controls and buttons are usable.

However, sometimes a parent will want to make sure that it becomes responder.
This can be handled by using the capture phase.
Before the responder system bubbles up from the deepest component,
it will do a capture phase, firing on*ShouldSetResponderCapture.
So if a parent View wants to prevent the child from becoming responder on a touch start,
it should have a onStartShouldSetResponderCapture handler which returns true.

Defined in: node_modules/@types/react-native/index.d.ts:2018

___

### onResponderEnd

• `Optional` **onResponderEnd**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

If the View returns true and attempts to become the responder, one of the following will happen:

Defined in: node_modules/@types/react-native/index.d.ts:1948

___

### onResponderGrant

• `Optional` **onResponderGrant**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

The View is now responding for touch events.
This is the time to highlight and show the user what is happening

Defined in: node_modules/@types/react-native/index.d.ts:1954

___

### onResponderMove

• `Optional` **onResponderMove**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

The user is moving their finger

Defined in: node_modules/@types/react-native/index.d.ts:1968

___

### onResponderReject

• `Optional` **onResponderReject**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Something else is the responder right now and will not release it

Defined in: node_modules/@types/react-native/index.d.ts:1959

___

### onResponderRelease

• `Optional` **onResponderRelease**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Fired at the end of the touch, ie "touchUp"

Defined in: node_modules/@types/react-native/index.d.ts:1973

___

### onResponderStart

• `Optional` **onResponderStart**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Defined in: node_modules/@types/react-native/index.d.ts:1975

___

### onResponderTerminate

• `Optional` **onResponderTerminate**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

The responder has been taken from the View.
Might be taken by other views after a call to onResponderTerminationRequest,
or might be taken by the OS without asking (happens with control center/ notification center on iOS)

Defined in: node_modules/@types/react-native/index.d.ts:1988

___

### onResponderTerminationRequest

• `Optional` **onResponderTerminationRequest**: *undefined* \| (`event`: *GestureResponderEvent*) => *boolean*

 Something else wants to become responder.
 Should this view release the responder? Returning true allows release

Defined in: node_modules/@types/react-native/index.d.ts:1981

___

### onStartShouldSetResponder

• `Optional` **onStartShouldSetResponder**: *undefined* \| (`event`: *GestureResponderEvent*) => *boolean*

Does this view want to become responder on the start of a touch?

Defined in: node_modules/@types/react-native/index.d.ts:1937

___

### onStartShouldSetResponderCapture

• `Optional` **onStartShouldSetResponderCapture**: *undefined* \| (`event`: *GestureResponderEvent*) => *boolean*

onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
where the deepest node is called first.
That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
This is desirable in most cases, because it makes sure all controls and buttons are usable.

However, sometimes a parent will want to make sure that it becomes responder.
This can be handled by using the capture phase.
Before the responder system bubbles up from the deepest component,
it will do a capture phase, firing on*ShouldSetResponderCapture.
So if a parent View wants to prevent the child from becoming responder on a touch start,
it should have a onStartShouldSetResponderCapture handler which returns true.

Defined in: node_modules/@types/react-native/index.d.ts:2003

___

### onTouchCancel

• `Optional` **onTouchCancel**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Defined in: node_modules/@types/react-native/index.d.ts:564

___

### onTouchEnd

• `Optional` **onTouchEnd**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Defined in: node_modules/@types/react-native/index.d.ts:563

___

### onTouchEndCapture

• `Optional` **onTouchEndCapture**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Defined in: node_modules/@types/react-native/index.d.ts:565

___

### onTouchMove

• `Optional` **onTouchMove**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Defined in: node_modules/@types/react-native/index.d.ts:562

___

### onTouchStart

• `Optional` **onTouchStart**: *undefined* \| (`event`: *GestureResponderEvent*) => *void*

Defined in: node_modules/@types/react-native/index.d.ts:561

___

### pointerEvents

• `Optional` **pointerEvents**: *undefined* \| *box-none* \| *none* \| *box-only* \| *auto*

In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:

.box-none {
  pointer-events: none;
}
.box-none * {
  pointer-events: all;
}

box-only is the equivalent of

.box-only {
  pointer-events: all;
}
.box-only * {
  pointer-events: none;
}

But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,
we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.

Defined in: node_modules/@types/react-native/index.d.ts:2488

___

### removeClippedSubviews

• `Optional` **removeClippedSubviews**: *undefined* \| *boolean*

This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,
most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.
The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).

Defined in: node_modules/@types/react-native/index.d.ts:2496

___

### renderToHardwareTextureAndroid

• `Optional` **renderToHardwareTextureAndroid**: *undefined* \| *boolean*

Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.

On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:
in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be
re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.

Defined in: node_modules/@types/react-native/index.d.ts:2202

___

### shouldRasterizeIOS

• `Optional` **shouldRasterizeIOS**: *undefined* \| *boolean*

Whether this view should be rendered as a bitmap before compositing.

On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;
for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view
and quickly composite it during each frame.

Rasterization incurs an off-screen drawing pass and the bitmap consumes memory.
Test and measure when using this property.

Defined in: node_modules/@types/react-native/index.d.ts:2168

___

### showMaxCigarettes

• `Optional` **showMaxCigarettes**: *undefined* \| *number*

The maximum number of cigarettes to show.

**`default`** 50

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:43](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L43)

___

### showVerticalAfter

• `Optional` **showVerticalAfter**: *undefined* \| *number*

For small amount of cigarettes, we display them horizontally. After this
number, they are displayed vertically.

**`default`** 4

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:50](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L50)

___

### spacingHorizontal

• `Optional` **spacingHorizontal**: *undefined* \| *number*

Horizontal spacing, in pixels, between the cigarettes, assuming the
cigarettes are displayed vertically.

**`default`** 5

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:57](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L57)

___

### spacingVertical

• `Optional` **spacingVertical**: *undefined* \| *number*

Vertical spacing, in pixels, between the cigarettes, assuming the
cigarettes are displayed vertically.

**`default`** 20

Defined in: [packages/ui/src/components/Cigarettes/Cigarettes.tsx:64](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/components/Cigarettes/Cigarettes.tsx#L64)

___

### style

• `Optional` **style**: *StyleProp*<ViewStyle\>

Defined in: node_modules/@types/react-native/index.d.ts:2498

___

### testID

• `Optional` **testID**: *undefined* \| *string*

Used to locate this view in end-to-end tests.

Defined in: node_modules/@types/react-native/index.d.ts:2503

___

### tvParallaxMagnification

• `Optional` **tvParallaxMagnification**: *undefined* \| *number*

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 1.0.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2154

___

### tvParallaxProperties

• `Optional` **tvParallaxProperties**: *undefined* \| TVParallaxProperties

*(Apple TV only)* Object with properties to control Apple TV parallax effects.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2126

___

### tvParallaxShiftDistanceX

• `Optional` **tvParallaxShiftDistanceX**: *undefined* \| *number*

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2133

___

### tvParallaxShiftDistanceY

• `Optional` **tvParallaxShiftDistanceY**: *undefined* \| *number*

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2140

___

### tvParallaxTiltAngle

• `Optional` **tvParallaxTiltAngle**: *undefined* \| *number*

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 0.05.

**`platform`** ios

Defined in: node_modules/@types/react-native/index.d.ts:2147
