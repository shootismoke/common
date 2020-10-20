[@shootismoke/ui](../README.md) › [Globals](../globals.md) › ["packages/dataproviders/src/types"](../modules/_packages_dataproviders_src_types_.md) › [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md)

# Interface: ArrayOneOrMore ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [Array](_packages_dataproviders_src_types_.arrayoneormore.md#array)‹T›

  ↳ **ArrayOneOrMore**

## Indexable

* \[ **n**: *number*\]: T

## Index

### Properties

* [0](_packages_dataproviders_src_types_.arrayoneormore.md#0)
* [Array](_packages_dataproviders_src_types_.arrayoneormore.md#array)
* [length](_packages_dataproviders_src_types_.arrayoneormore.md#length)

### Methods

* [[Symbol.iterator]](_packages_dataproviders_src_types_.arrayoneormore.md#[symbol.iterator])
* [[Symbol.unscopables]](_packages_dataproviders_src_types_.arrayoneormore.md#[symbol.unscopables])
* [concat](_packages_dataproviders_src_types_.arrayoneormore.md#concat)
* [copyWithin](_packages_dataproviders_src_types_.arrayoneormore.md#copywithin)
* [entries](_packages_dataproviders_src_types_.arrayoneormore.md#entries)
* [every](_packages_dataproviders_src_types_.arrayoneormore.md#every)
* [fill](_packages_dataproviders_src_types_.arrayoneormore.md#fill)
* [filter](_packages_dataproviders_src_types_.arrayoneormore.md#filter)
* [find](_packages_dataproviders_src_types_.arrayoneormore.md#find)
* [findIndex](_packages_dataproviders_src_types_.arrayoneormore.md#findindex)
* [flat](_packages_dataproviders_src_types_.arrayoneormore.md#flat)
* [flatMap](_packages_dataproviders_src_types_.arrayoneormore.md#flatmap)
* [forEach](_packages_dataproviders_src_types_.arrayoneormore.md#foreach)
* [includes](_packages_dataproviders_src_types_.arrayoneormore.md#includes)
* [indexOf](_packages_dataproviders_src_types_.arrayoneormore.md#indexof)
* [join](_packages_dataproviders_src_types_.arrayoneormore.md#join)
* [keys](_packages_dataproviders_src_types_.arrayoneormore.md#keys)
* [lastIndexOf](_packages_dataproviders_src_types_.arrayoneormore.md#lastindexof)
* [map](_packages_dataproviders_src_types_.arrayoneormore.md#map)
* [pop](_packages_dataproviders_src_types_.arrayoneormore.md#pop)
* [push](_packages_dataproviders_src_types_.arrayoneormore.md#push)
* [reduce](_packages_dataproviders_src_types_.arrayoneormore.md#reduce)
* [reduceRight](_packages_dataproviders_src_types_.arrayoneormore.md#reduceright)
* [reverse](_packages_dataproviders_src_types_.arrayoneormore.md#reverse)
* [shift](_packages_dataproviders_src_types_.arrayoneormore.md#shift)
* [slice](_packages_dataproviders_src_types_.arrayoneormore.md#slice)
* [some](_packages_dataproviders_src_types_.arrayoneormore.md#some)
* [sort](_packages_dataproviders_src_types_.arrayoneormore.md#sort)
* [splice](_packages_dataproviders_src_types_.arrayoneormore.md#splice)
* [toLocaleString](_packages_dataproviders_src_types_.arrayoneormore.md#tolocalestring)
* [toString](_packages_dataproviders_src_types_.arrayoneormore.md#tostring)
* [unshift](_packages_dataproviders_src_types_.arrayoneormore.md#unshift)
* [values](_packages_dataproviders_src_types_.arrayoneormore.md#values)

## Properties

###  0

• **0**: *T*

*Defined in [packages/dataproviders/src/types.ts:15](https://github.com/shootismoke/common/blob/29c80cb/packages/dataproviders/src/types.ts#L15)*

___

###  Array

• **Array**: *ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1385

___

###  length

• **length**: *number*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[length](_packages_dataproviders_src_types_.arrayoneormore.md#length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1215

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹T›*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[[Symbol.iterator]](_packages_dataproviders_src_types_.arrayoneormore.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹T›*

___

###  [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[[Symbol.unscopables]](_packages_dataproviders_src_types_.arrayoneormore.md#[symbol.unscopables])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

* **copyWithin**: *boolean*

* **entries**: *boolean*

* **fill**: *boolean*

* **find**: *boolean*

* **findIndex**: *boolean*

* **keys**: *boolean*

* **values**: *boolean*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹T›[]): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[concat](_packages_dataproviders_src_types_.arrayoneormore.md#concat)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *T[]*

▸ **concat**(...`items`: (T | ConcatArray‹T›)[]): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[concat](_packages_dataproviders_src_types_.arrayoneormore.md#concat)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | (T &#124; ConcatArray‹T›)[] | Additional items to add to the end of array1.  |

**Returns:** *T[]*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[copyWithin](_packages_dataproviders_src_types_.arrayoneormore.md#copywithin)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:64

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *IterableIterator‹[number, T]›*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[entries](_packages_dataproviders_src_types_.arrayoneormore.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, T]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[every](_packages_dataproviders_src_types_.arrayoneormore.md#every)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1310

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: T, `index`: number, `array`: T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: T, `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[fill](_packages_dataproviders_src_types_.arrayoneormore.md#fill)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**‹**S**›(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[filter](_packages_dataproviders_src_types_.arrayoneormore.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1337

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *T*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: T[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[filter](_packages_dataproviders_src_types_.arrayoneormore.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1343

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *T[]*

___

###  find

▸ **find**‹**S**›(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[find](_packages_dataproviders_src_types_.arrayoneormore.md#find)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *T*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: T, `index`: number, `obj`: T[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | T |
`index` | number |
`obj` | T[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *T | undefined*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[find](_packages_dataproviders_src_types_.arrayoneormore.md#find)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: T, `index`: number, `obj`: T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`obj` | T[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *T | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[findIndex](_packages_dataproviders_src_types_.arrayoneormore.md#findindex)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: T, `index`: number, `obj`: T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`obj` | T[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  flat

▸ **flat**‹**A**, **D**›(`this`: A, `depth?`: D): *FlatArray‹A, D›[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[flat](_packages_dataproviders_src_types_.arrayoneormore.md#flat)*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:81

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **A**

▪ **D**: *number*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | A | - |
`depth?` | D | The maximum recursion depth  |

**Returns:** *FlatArray‹A, D›[]*

___

###  flatMap

▸ **flatMap**‹**U**, **This**›(`callback`: function, `thisArg?`: This): *U[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[flatMap](_packages_dataproviders_src_types_.arrayoneormore.md#flatmap)*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:70

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

**Type parameters:**

▪ **U**

▪ **This**

**Parameters:**

▪ **callback**: *function*

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

▸ (`this`: This, `value`: T, `index`: number, `array`: T[]): *U | ReadonlyArray‹U›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | This |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *This*

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[forEach](_packages_dataproviders_src_types_.arrayoneormore.md#foreach)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: T[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: T, `fromIndex?`: undefined | number): *boolean*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[includes](_packages_dataproviders_src_types_.arrayoneormore.md#includes)*

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | T | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: T, `fromIndex?`: undefined | number): *number*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[indexOf](_packages_dataproviders_src_types_.arrayoneormore.md#indexof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1295

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | T | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[join](_packages_dataproviders_src_types_.arrayoneormore.md#join)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1247

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[keys](_packages_dataproviders_src_types_.arrayoneormore.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: T, `fromIndex?`: undefined | number): *number*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[lastIndexOf](_packages_dataproviders_src_types_.arrayoneormore.md#lastindexof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1301

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | T | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**‹**U**›(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[map](_packages_dataproviders_src_types_.arrayoneormore.md#map)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1331

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  pop

▸ **pop**(): *T | undefined*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[pop](_packages_dataproviders_src_types_.arrayoneormore.md#pop)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** *T | undefined*

___

###  push

▸ **push**(...`items`: T[]): *number*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[push](_packages_dataproviders_src_types_.arrayoneormore.md#push)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *T*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reduce](_packages_dataproviders_src_types_.arrayoneormore.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | T[] |

**Returns:** *T*

▸ **reduce**(`callbackfn`: function, `initialValue`: T): *T*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reduce](_packages_dataproviders_src_types_.arrayoneormore.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | T[] |

▪ **initialValue**: *T*

**Returns:** *T*

▸ **reduce**‹**U**›(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reduce](_packages_dataproviders_src_types_.arrayoneormore.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: T, `currentIndex`: number, `array`: T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | T |
`currentIndex` | number |
`array` | T[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *T*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reduceRight](_packages_dataproviders_src_types_.arrayoneormore.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | T[] |

**Returns:** *T*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: T): *T*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reduceRight](_packages_dataproviders_src_types_.arrayoneormore.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | T[] |

▪ **initialValue**: *T*

**Returns:** *T*

▸ **reduceRight**‹**U**›(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reduceRight](_packages_dataproviders_src_types_.arrayoneormore.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: T, `currentIndex`: number, `array`: T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | T |
`currentIndex` | number |
`array` | T[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[reverse](_packages_dataproviders_src_types_.arrayoneormore.md#reverse)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** *T[]*

___

###  shift

▸ **shift**(): *T | undefined*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[shift](_packages_dataproviders_src_types_.arrayoneormore.md#shift)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** *T | undefined*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[slice](_packages_dataproviders_src_types_.arrayoneormore.md#slice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1261

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *T[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[some](_packages_dataproviders_src_types_.arrayoneormore.md#some)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1319

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: T, `index`: number, `array`: T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[sort](_packages_dataproviders_src_types_.arrayoneormore.md#sort)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1271

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[splice](_packages_dataproviders_src_types_.arrayoneormore.md#splice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *T[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: T[]): *T[]*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[splice](_packages_dataproviders_src_types_.arrayoneormore.md#splice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | T[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *T[]*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[toLocaleString](_packages_dataproviders_src_types_.arrayoneormore.md#tolocalestring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[toString](_packages_dataproviders_src_types_.arrayoneormore.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1219

Returns a string representation of an array.

**Returns:** *string*

___

###  unshift

▸ **unshift**(...`items`: T[]): *number*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[unshift](_packages_dataproviders_src_types_.arrayoneormore.md#unshift)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

###  values

▸ **values**(): *IterableIterator‹T›*

*Inherited from [ArrayOneOrMore](_packages_dataproviders_src_types_.arrayoneormore.md).[values](_packages_dataproviders_src_types_.arrayoneormore.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

Returns an iterable of values in the array

**Returns:** *IterableIterator‹T›*
