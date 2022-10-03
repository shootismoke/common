[@shootismoke/ui](../README.md) / [Exports](../modules.md) / MongoPushTicket

# Interface: MongoPushTicket

## Hierarchy

- [`IPushTicket`](../modules.md#ipushticket)

- `Document`

  ↳ **`MongoPushTicket`**

## Table of contents

### Properties

- [$locals](MongoPushTicket.md#$locals)
- [$op](MongoPushTicket.md#$op)
- [$where](MongoPushTicket.md#$where)
- [\_\_v](MongoPushTicket.md#__v)
- [\_id](MongoPushTicket.md#_id)
- [baseModelName](MongoPushTicket.md#basemodelname)
- [collection](MongoPushTicket.md#collection)
- [db](MongoPushTicket.md#db)
- [errors](MongoPushTicket.md#errors)
- [id](MongoPushTicket.md#id)
- [isNew](MongoPushTicket.md#isnew)
- [modelName](MongoPushTicket.md#modelname)
- [receiptId](MongoPushTicket.md#receiptid)
- [schema](MongoPushTicket.md#schema)
- [status](MongoPushTicket.md#status)
- [userId](MongoPushTicket.md#userid)

### Methods

- [$assertPopulated](MongoPushTicket.md#$assertpopulated)
- [$getAllSubdocs](MongoPushTicket.md#$getallsubdocs)
- [$getPopulatedDocs](MongoPushTicket.md#$getpopulateddocs)
- [$ignore](MongoPushTicket.md#$ignore)
- [$inc](MongoPushTicket.md#$inc)
- [$isDefault](MongoPushTicket.md#$isdefault)
- [$isDeleted](MongoPushTicket.md#$isdeleted)
- [$isEmpty](MongoPushTicket.md#$isempty)
- [$isValid](MongoPushTicket.md#$isvalid)
- [$markValid](MongoPushTicket.md#$markvalid)
- [$model](MongoPushTicket.md#$model)
- [$parent](MongoPushTicket.md#$parent)
- [$session](MongoPushTicket.md#$session)
- [$set](MongoPushTicket.md#$set)
- [delete](MongoPushTicket.md#delete)
- [deleteOne](MongoPushTicket.md#deleteone)
- [depopulate](MongoPushTicket.md#depopulate)
- [directModifiedPaths](MongoPushTicket.md#directmodifiedpaths)
- [equals](MongoPushTicket.md#equals)
- [get](MongoPushTicket.md#get)
- [getChanges](MongoPushTicket.md#getchanges)
- [increment](MongoPushTicket.md#increment)
- [init](MongoPushTicket.md#init)
- [invalidate](MongoPushTicket.md#invalidate)
- [isDirectModified](MongoPushTicket.md#isdirectmodified)
- [isDirectSelected](MongoPushTicket.md#isdirectselected)
- [isInit](MongoPushTicket.md#isinit)
- [isModified](MongoPushTicket.md#ismodified)
- [isSelected](MongoPushTicket.md#isselected)
- [markModified](MongoPushTicket.md#markmodified)
- [modifiedPaths](MongoPushTicket.md#modifiedpaths)
- [overwrite](MongoPushTicket.md#overwrite)
- [populate](MongoPushTicket.md#populate)
- [populated](MongoPushTicket.md#populated)
- [remove](MongoPushTicket.md#remove)
- [replaceOne](MongoPushTicket.md#replaceone)
- [save](MongoPushTicket.md#save)
- [set](MongoPushTicket.md#set)
- [toJSON](MongoPushTicket.md#tojson)
- [toObject](MongoPushTicket.md#toobject)
- [unmarkModified](MongoPushTicket.md#unmarkmodified)
- [update](MongoPushTicket.md#update)
- [updateOne](MongoPushTicket.md#updateone)
- [validate](MongoPushTicket.md#validate)
- [validateSync](MongoPushTicket.md#validatesync)

## Properties

### $locals

• **$locals**: `Record`<`string`, `unknown`\>

Empty object that you can use for storing properties on the document. This
is handy for passing data to middleware without conflicting with Mongoose
internals.

#### Inherited from

Document.$locals

#### Defined in

node_modules/mongoose/types/document.d.ts:68

___

### $op

• **$op**: ``null`` \| ``"remove"`` \| ``"save"`` \| ``"validate"``

A string containing the current operation that Mongoose is executing
on this document. Can be `null`, `'save'`, `'validate'`, or `'remove'`.

#### Inherited from

Document.$op

#### Defined in

node_modules/mongoose/types/document.d.ts:80

___

### $where

• **$where**: `Record`<`string`, `unknown`\>

Set this property to add additional query filters when Mongoose saves this document and `isNew` is false.

#### Inherited from

Document.$where

#### Defined in

node_modules/mongoose/types/document.d.ts:95

___

### \_\_v

• `Optional` **\_\_v**: `any`

This documents __v.

#### Inherited from

Document.\_\_v

#### Defined in

node_modules/mongoose/types/document.d.ts:26

___

### \_id

• **\_id**: `string`

#### Overrides

Document.\_id

#### Defined in

[packages/ui/src/util/types.ts:57](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/types.ts#L57)

___

### baseModelName

• `Optional` **baseModelName**: `string`

If this is a discriminator model, `baseModelName` is the name of the base model.

#### Inherited from

Document.baseModelName

#### Defined in

node_modules/mongoose/types/document.d.ts:98

___

### collection

• **collection**: `Collection`<`Document`\>

Collection the model uses.

#### Inherited from

Document.collection

#### Defined in

node_modules/mongoose/types/document.d.ts:101

___

### db

• **db**: `Connection`

Connection the model uses.

#### Inherited from

Document.db

#### Defined in

node_modules/mongoose/types/document.d.ts:104

___

### errors

• `Optional` **errors**: `ValidationError`

Returns the current validation errors.

#### Inherited from

Document.errors

#### Defined in

node_modules/mongoose/types/document.d.ts:139

___

### id

• `Optional` **id**: `any`

The string version of this documents _id.

#### Inherited from

Document.id

#### Defined in

node_modules/mongoose/types/document.d.ts:151

___

### isNew

• **isNew**: `boolean`

Boolean flag specifying if the document is new.

#### Inherited from

Document.isNew

#### Defined in

node_modules/mongoose/types/document.d.ts:182

___

### modelName

• **modelName**: `string`

The name of the model

#### Inherited from

Document.modelName

#### Defined in

node_modules/mongoose/types/document.d.ts:194

___

### receiptId

• `Optional` **receiptId**: `string`

#### Inherited from

IPushTicket.receiptId

#### Defined in

[packages/ui/src/util/types.ts:50](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/types.ts#L50)

___

### schema

• **schema**: `Schema`<`any`, `Model`<`any`, `any`, `any`, `any`, `any`\>, {}, {}, {}, {}, ``"type"``, {}\>

The document's schema.

#### Inherited from

Document.schema

#### Defined in

node_modules/mongoose/types/document.d.ts:232

___

### status

• **status**: ``"ok"`` \| ``"error"``

#### Inherited from

IPushTicket.status

#### Defined in

node_modules/expo-server-sdk/build/ExpoClient.d.ts:72

node_modules/expo-server-sdk/build/ExpoClient.d.ts:83

___

### userId

• **userId**: `string`

#### Inherited from

IPushTicket.userId

#### Defined in

[packages/ui/src/util/types.ts:51](https://github.com/shootismoke/common//blob/a593a9f/packages/ui/src/util/types.ts#L51)

## Methods

### $assertPopulated

▸ **$assertPopulated**<`Paths`\>(`path`, `values?`): `Omit`<[`MongoPushTicket`](MongoPushTicket.md), keyof `Paths`\> & `Paths`

Assert that a given path or paths is populated. Throws an error if not populated.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `values?` | `Partial`<`Paths`\> |

#### Returns

`Omit`<[`MongoPushTicket`](MongoPushTicket.md), keyof `Paths`\> & `Paths`

#### Inherited from

Document.$assertPopulated

#### Defined in

node_modules/mongoose/types/document.d.ts:29

___

### $getAllSubdocs

▸ **$getAllSubdocs**(): `Document`<`any`, `any`, `any`\>[]

#### Returns

`Document`<`any`, `any`, `any`\>[]

#### Inherited from

Document.$getAllSubdocs

#### Defined in

node_modules/mongoose/types/document.d.ts:32

___

### $getPopulatedDocs

▸ **$getPopulatedDocs**(): `Document`<`any`, `any`, `any`\>[]

Returns an array of all populated documents associated with the query

#### Returns

`Document`<`any`, `any`, `any`\>[]

#### Inherited from

Document.$getPopulatedDocs

#### Defined in

node_modules/mongoose/types/document.d.ts:44

___

### $ignore

▸ **$ignore**(`path`): `void`

Don't run validation on this path or persist changes to this path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

Document.$ignore

#### Defined in

node_modules/mongoose/types/document.d.ts:35

___

### $inc

▸ **$inc**(`path`, `val?`): [`MongoPushTicket`](MongoPushTicket.md)

Increments the numeric value at `path` by the given `val`.
When you call `save()` on this document, Mongoose will send a
`$inc` as opposed to a `$set`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `val?` | `number` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.$inc

#### Defined in

node_modules/mongoose/types/document.d.ts:51

___

### $isDefault

▸ **$isDefault**(`path`): `boolean`

Checks if a path is set to its default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.$isDefault

#### Defined in

node_modules/mongoose/types/document.d.ts:38

___

### $isDeleted

▸ **$isDeleted**(`val?`): `boolean`

Getter/setter, determines whether the document was removed or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

Document.$isDeleted

#### Defined in

node_modules/mongoose/types/document.d.ts:41

___

### $isEmpty

▸ **$isEmpty**(`path`): `boolean`

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.$isEmpty

#### Defined in

node_modules/mongoose/types/document.d.ts:58

___

### $isValid

▸ **$isValid**(`path`): `boolean`

Checks if a path is invalid

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.$isValid

#### Defined in

node_modules/mongoose/types/document.d.ts:61

___

### $markValid

▸ **$markValid**(`path`): `void`

Marks a path as valid, removing existing validation errors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

Document.$markValid

#### Defined in

node_modules/mongoose/types/document.d.ts:71

___

### $model

▸ **$model**<`ModelType`\>(`name`): `ModelType`

Returns the model with the given name on this document's associated connection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | `Model`<`unknown`, {}, {}, {}, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ModelType`

#### Inherited from

Document.$model

#### Defined in

node_modules/mongoose/types/document.d.ts:74

___

### $parent

▸ **$parent**(): `undefined` \| `Document`<`any`, `any`, `any`\>

If this document is a subdocument or populated document, returns the
document's parent. Returns undefined otherwise.

#### Returns

`undefined` \| `Document`<`any`, `any`, `any`\>

#### Inherited from

Document.$parent

#### Defined in

node_modules/mongoose/types/document.d.ts:207

___

### $session

▸ **$session**(`session?`): ``null`` \| `ClientSession`

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | ``null`` \| `ClientSession` |

#### Returns

``null`` \| `ClientSession`

#### Inherited from

Document.$session

#### Defined in

node_modules/mongoose/types/document.d.ts:87

___

### $set

▸ **$set**(`path`, `val`, `type`, `options?`): [`MongoPushTicket`](MongoPushTicket.md)

Alias for `set()`, used internally to avoid conflicts

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `any` |
| `type` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.$set

#### Defined in

node_modules/mongoose/types/document.d.ts:90

▸ **$set**(`path`, `val`, `options?`): [`MongoPushTicket`](MongoPushTicket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.$set

#### Defined in

node_modules/mongoose/types/document.d.ts:91

▸ **$set**(`value`): [`MongoPushTicket`](MongoPushTicket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.$set

#### Defined in

node_modules/mongoose/types/document.d.ts:92

___

### delete

▸ **delete**(`options`, `callback`): `void`

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `QueryOptions`<`unknown`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

Document.delete

#### Defined in

node_modules/mongoose/types/document.d.ts:107

▸ **delete**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

Document.delete

#### Defined in

node_modules/mongoose/types/document.d.ts:108

▸ **delete**(`options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `QueryOptions`<`unknown`\> |

#### Returns

`any`

#### Inherited from

Document.delete

#### Defined in

node_modules/mongoose/types/document.d.ts:109

___

### deleteOne

▸ **deleteOne**(`options`, `callback`): `void`

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `QueryOptions`<`unknown`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

Document.deleteOne

#### Defined in

node_modules/mongoose/types/document.d.ts:112

▸ **deleteOne**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

Document.deleteOne

#### Defined in

node_modules/mongoose/types/document.d.ts:113

▸ **deleteOne**(`options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `QueryOptions`<`unknown`\> |

#### Returns

`any`

#### Inherited from

Document.deleteOne

#### Defined in

node_modules/mongoose/types/document.d.ts:114

___

### depopulate

▸ **depopulate**(`path?`): [`MongoPushTicket`](MongoPushTicket.md)

Takes a populated field and returns it to its unpopulated state. If called with
no arguments, then all populated fields are returned to their unpopulated state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| `string`[] |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.depopulate

#### Defined in

node_modules/mongoose/types/document.d.ts:120

___

### directModifiedPaths

▸ **directModifiedPaths**(): `string`[]

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, { foo: 'bar' })`, or `doc.set('foo', 'bar')`.

#### Returns

`string`[]

#### Inherited from

Document.directModifiedPaths

#### Defined in

node_modules/mongoose/types/document.d.ts:127

___

### equals

▸ **equals**(`doc`): `boolean`

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document`<`any`, `any`, `any`\> |

#### Returns

`boolean`

#### Inherited from

Document.equals

#### Defined in

node_modules/mongoose/types/document.d.ts:136

___

### get

▸ **get**(`path`, `type?`, `options?`): `any`

Returns the value of a path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `type?` | `any` |
| `options?` | `any` |

#### Returns

`any`

#### Inherited from

Document.get

#### Defined in

node_modules/mongoose/types/document.d.ts:142

___

### getChanges

▸ **getChanges**(): `UpdateQuery`<[`MongoPushTicket`](MongoPushTicket.md)\>

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

#### Returns

`UpdateQuery`<[`MongoPushTicket`](MongoPushTicket.md)\>

#### Inherited from

Document.getChanges

#### Defined in

node_modules/mongoose/types/document.d.ts:148

___

### increment

▸ **increment**(): [`MongoPushTicket`](MongoPushTicket.md)

Signal that we desire an increment of this documents version.

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.increment

#### Defined in

node_modules/mongoose/types/document.d.ts:154

___

### init

▸ **init**(`obj`, `opts?`, `callback?`): [`MongoPushTicket`](MongoPushTicket.md)

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `AnyObject` |
| `opts?` | `AnyObject` |
| `callback?` | `Callback`<[`MongoPushTicket`](MongoPushTicket.md)\> |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.init

#### Defined in

node_modules/mongoose/types/document.d.ts:161

___

### invalidate

▸ **invalidate**(`path`, `errorMsg`, `value?`, `kind?`): ``null`` \| `NativeError`

Marks a path as invalid, causing validation to fail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `errorMsg` | `string` \| `NativeError` |
| `value?` | `any` |
| `kind?` | `string` |

#### Returns

``null`` \| `NativeError`

#### Inherited from

Document.invalidate

#### Defined in

node_modules/mongoose/types/document.d.ts:164

___

### isDirectModified

▸ **isDirectModified**(`path`): `boolean`

Returns true if `path` was directly set and modified, else false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |

#### Returns

`boolean`

#### Inherited from

Document.isDirectModified

#### Defined in

node_modules/mongoose/types/document.d.ts:167

___

### isDirectSelected

▸ **isDirectSelected**(`path`): `boolean`

Checks if `path` was explicitly selected. If no projection, always returns true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.isDirectSelected

#### Defined in

node_modules/mongoose/types/document.d.ts:170

___

### isInit

▸ **isInit**(`path`): `boolean`

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.isInit

#### Defined in

node_modules/mongoose/types/document.d.ts:173

___

### isModified

▸ **isModified**(`path?`): `boolean`

Returns true if any of the given paths are modified, else false. If no arguments, returns `true` if any path
in this document is modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| `string`[] |

#### Returns

`boolean`

#### Inherited from

Document.isModified

#### Defined in

node_modules/mongoose/types/document.d.ts:179

___

### isSelected

▸ **isSelected**(`path`): `boolean`

Checks if `path` was selected in the source query which initialized this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.isSelected

#### Defined in

node_modules/mongoose/types/document.d.ts:185

___

### markModified

▸ **markModified**(`path`, `scope?`): `void`

Marks the path as having pending changes to write to the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `scope?` | `any` |

#### Returns

`void`

#### Inherited from

Document.markModified

#### Defined in

node_modules/mongoose/types/document.d.ts:188

___

### modifiedPaths

▸ **modifiedPaths**(`options?`): `string`[]

Returns the list of paths that have been modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.includeChildren?` | `boolean` |

#### Returns

`string`[]

#### Inherited from

Document.modifiedPaths

#### Defined in

node_modules/mongoose/types/document.d.ts:191

___

### overwrite

▸ **overwrite**(`obj`): [`MongoPushTicket`](MongoPushTicket.md)

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `AnyObject` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.overwrite

#### Defined in

node_modules/mongoose/types/document.d.ts:201

___

### populate

▸ **populate**<`Paths`\>(`path`): `Promise`<`MergeType`<[`MongoPushTicket`](MongoPushTicket.md), `Paths`\>\>

Populates document references.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `PopulateOptions` \| (`string` \| `PopulateOptions`)[] |

#### Returns

`Promise`<`MergeType`<[`MongoPushTicket`](MongoPushTicket.md), `Paths`\>\>

#### Inherited from

Document.populate

#### Defined in

node_modules/mongoose/types/document.d.ts:210

▸ **populate**<`Paths`\>(`path`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `PopulateOptions` \| (`string` \| `PopulateOptions`)[] |
| `callback` | `Callback`<`MergeType`<[`MongoPushTicket`](MongoPushTicket.md), `Paths`\>\> |

#### Returns

`void`

#### Inherited from

Document.populate

#### Defined in

node_modules/mongoose/types/document.d.ts:211

▸ **populate**<`Paths`\>(`path`, `select?`, `model?`, `match?`, `options?`): `Promise`<`MergeType`<[`MongoPushTicket`](MongoPushTicket.md), `Paths`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `select?` | `string` \| `AnyObject` |
| `model?` | `Model`<`any`, {}, {}, {}, `any`\> |
| `match?` | `AnyObject` |
| `options?` | `PopulateOptions` |

#### Returns

`Promise`<`MergeType`<[`MongoPushTicket`](MongoPushTicket.md), `Paths`\>\>

#### Inherited from

Document.populate

#### Defined in

node_modules/mongoose/types/document.d.ts:212

▸ **populate**<`Paths`\>(`path`, `select?`, `model?`, `match?`, `options?`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `select?` | `string` \| `AnyObject` |
| `model?` | `Model`<`any`, {}, {}, {}, `any`\> |
| `match?` | `AnyObject` |
| `options?` | `PopulateOptions` |
| `callback?` | `Callback`<`MergeType`<[`MongoPushTicket`](MongoPushTicket.md), `Paths`\>\> |

#### Returns

`void`

#### Inherited from

Document.populate

#### Defined in

node_modules/mongoose/types/document.d.ts:213

___

### populated

▸ **populated**(`path`): `any`

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`any`

#### Inherited from

Document.populated

#### Defined in

node_modules/mongoose/types/document.d.ts:216

___

### remove

▸ **remove**(`options`, `callback`): `void`

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `QueryOptions`<`unknown`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

Document.remove

#### Defined in

node_modules/mongoose/types/document.d.ts:219

▸ **remove**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

Document.remove

#### Defined in

node_modules/mongoose/types/document.d.ts:220

▸ **remove**(`options?`): `Promise`<[`MongoPushTicket`](MongoPushTicket.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `QueryOptions`<`unknown`\> |

#### Returns

`Promise`<[`MongoPushTicket`](MongoPushTicket.md)\>

#### Inherited from

Document.remove

#### Defined in

node_modules/mongoose/types/document.d.ts:221

___

### replaceOne

▸ **replaceOne**(`replacement?`, `options?`, `callback?`): `Query`<`any`, [`MongoPushTicket`](MongoPushTicket.md), {}, [`MongoPushTicket`](MongoPushTicket.md)\>

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacement?` | `AnyObject` |
| `options?` | ``null`` \| `QueryOptions`<`unknown`\> |
| `callback?` | `Callback`<`any`\> |

#### Returns

`Query`<`any`, [`MongoPushTicket`](MongoPushTicket.md), {}, [`MongoPushTicket`](MongoPushTicket.md)\>

#### Inherited from

Document.replaceOne

#### Defined in

node_modules/mongoose/types/document.d.ts:224

___

### save

▸ **save**(`options`, `callback`): `void`

Saves this document by inserting a new document into the database if [document.isNew](/docs/api.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SaveOptions` |
| `callback` | `Callback`<[`MongoPushTicket`](MongoPushTicket.md)\> |

#### Returns

`void`

#### Inherited from

Document.save

#### Defined in

node_modules/mongoose/types/document.d.ts:227

▸ **save**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<[`MongoPushTicket`](MongoPushTicket.md)\> |

#### Returns

`void`

#### Inherited from

Document.save

#### Defined in

node_modules/mongoose/types/document.d.ts:228

▸ **save**(`options?`): `Promise`<[`MongoPushTicket`](MongoPushTicket.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SaveOptions` |

#### Returns

`Promise`<[`MongoPushTicket`](MongoPushTicket.md)\>

#### Inherited from

Document.save

#### Defined in

node_modules/mongoose/types/document.d.ts:229

___

### set

▸ **set**(`path`, `val`, `type`, `options?`): [`MongoPushTicket`](MongoPushTicket.md)

Sets the value of a path, or many paths.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `any` |
| `type` | `any` |
| `options?` | `any` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:235

▸ **set**(`path`, `val`, `options?`): [`MongoPushTicket`](MongoPushTicket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `any` |
| `options?` | `any` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:236

▸ **set**(`value`): [`MongoPushTicket`](MongoPushTicket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`MongoPushTicket`](MongoPushTicket.md)

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:237

___

### toJSON

▸ **toJSON**<`T`\>(`options?`): `FlattenMaps`<`T`\>

The return value of this method is used in calls to JSON.stringify(doc).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `LeanDocument`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ToObjectOptions` & { `flattenMaps?`: ``true``  } |

#### Returns

`FlattenMaps`<`T`\>

#### Inherited from

Document.toJSON

#### Defined in

node_modules/mongoose/types/document.d.ts:240

▸ **toJSON**<`T`\>(`options`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `LeanDocument`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ToObjectOptions` & { `flattenMaps`: ``false``  } |

#### Returns

`T`

#### Inherited from

Document.toJSON

#### Defined in

node_modules/mongoose/types/document.d.ts:241

___

### toObject

▸ **toObject**<`T`\>(`options?`): `Require_id`<`T`\>

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `LeanDocument`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ToObjectOptions` |

#### Returns

`Require_id`<`T`\>

#### Inherited from

Document.toObject

#### Defined in

node_modules/mongoose/types/document.d.ts:244

___

### unmarkModified

▸ **unmarkModified**(`path`): `void`

Clears the modified state on the specified path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

Document.unmarkModified

#### Defined in

node_modules/mongoose/types/document.d.ts:247

___

### update

▸ **update**(`update?`, `options?`, `callback?`): `Query`<`any`, [`MongoPushTicket`](MongoPushTicket.md), {}, [`MongoPushTicket`](MongoPushTicket.md)\>

Sends an update command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `UpdateWithAggregationPipeline` \| `UpdateQuery`<[`MongoPushTicket`](MongoPushTicket.md)\> |
| `options?` | ``null`` \| `QueryOptions`<`unknown`\> |
| `callback?` | `Callback`<`any`\> |

#### Returns

`Query`<`any`, [`MongoPushTicket`](MongoPushTicket.md), {}, [`MongoPushTicket`](MongoPushTicket.md)\>

#### Inherited from

Document.update

#### Defined in

node_modules/mongoose/types/document.d.ts:250

___

### updateOne

▸ **updateOne**(`update?`, `options?`, `callback?`): `Query`<`any`, [`MongoPushTicket`](MongoPushTicket.md), {}, [`MongoPushTicket`](MongoPushTicket.md)\>

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `UpdateWithAggregationPipeline` \| `UpdateQuery`<[`MongoPushTicket`](MongoPushTicket.md)\> |
| `options?` | ``null`` \| `QueryOptions`<`unknown`\> |
| `callback?` | `Callback`<`any`\> |

#### Returns

`Query`<`any`, [`MongoPushTicket`](MongoPushTicket.md), {}, [`MongoPushTicket`](MongoPushTicket.md)\>

#### Inherited from

Document.updateOne

#### Defined in

node_modules/mongoose/types/document.d.ts:253

___

### validate

▸ **validate**(`pathsToValidate`, `options`, `callback`): `void`

Executes registered validation rules for this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate` | `PathsToValidate` |
| `options` | `AnyObject` |
| `callback` | `CallbackWithoutResult` |

#### Returns

`void`

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:256

▸ **validate**(`pathsToValidate`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate` | `PathsToValidate` |
| `callback` | `CallbackWithoutResult` |

#### Returns

`void`

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:257

▸ **validate**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `CallbackWithoutResult` |

#### Returns

`void`

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:258

▸ **validate**(`pathsToValidate?`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | `PathsToValidate` |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:259

▸ **validate**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.pathsToSkip?` | `pathsToSkip` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:260

___

### validateSync

▸ **validateSync**(`options`): ``null`` \| `ValidationError`

Executes registered validation rules (skipping asynchronous validators) for this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.pathsToSkip?` | `pathsToSkip` |

#### Returns

``null`` \| `ValidationError`

#### Inherited from

Document.validateSync

#### Defined in

node_modules/mongoose/types/document.d.ts:263

▸ **validateSync**(`pathsToValidate?`, `options?`): ``null`` \| `ValidationError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | `PathsToValidate` |
| `options?` | `AnyObject` |

#### Returns

``null`` \| `ValidationError`

#### Inherited from

Document.validateSync

#### Defined in

node_modules/mongoose/types/document.d.ts:264
