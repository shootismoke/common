[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/ui/src/context/Frequency"](_packages_ui_src_context_frequency_.md)

# Module: "packages/ui/src/context/Frequency"

## Index

### Interfaces

* [Context](../interfaces/_packages_ui_src_context_frequency_.context.md)

### Type aliases

* [Frequency](_packages_ui_src_context_frequency_.md#frequency)

### Variables

* [FrequencyContext](_packages_ui_src_context_frequency_.md#const-frequencycontext)

### Functions

* [FrequencyContextProvider](_packages_ui_src_context_frequency_.md#frequencycontextprovider)

## Type aliases

###  Frequency

Ƭ **Frequency**: *"daily" | "weekly" | "monthly"*

*Defined in [packages/ui/src/context/Frequency.tsx:21](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/context/Frequency.tsx#L21)*

## Variables

### `Const` FrequencyContext

• **FrequencyContext**: *Context‹[Context](../interfaces/_packages_ui_src_context_frequency_.context.md)›* = createContext<Context>({
	frequency: 'daily',
	setFrequency: noop,
})

*Defined in [packages/ui/src/context/Frequency.tsx:28](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/context/Frequency.tsx#L28)*

## Functions

###  FrequencyContextProvider

▸ **FrequencyContextProvider**(`__namedParameters`: object): *ReactElement*

*Defined in [packages/ui/src/context/Frequency.tsx:33](https://github.com/shootismoke/common/blob/c0e7829/packages/ui/src/context/Frequency.tsx#L33)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | Element‹› |

**Returns:** *ReactElement*
