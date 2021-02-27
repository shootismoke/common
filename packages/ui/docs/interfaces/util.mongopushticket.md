[@shootismoke/ui](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / MongoPushTicket

# Interface: MongoPushTicket

[util](../modules/util.md).MongoPushTicket

## Hierarchy

* [*IPushTicket*](../modules/util_types.md#ipushticket)

* *Document*

  ↳ **MongoPushTicket**

## Table of contents

### Properties

- [$locals](util.mongopushticket.md#$locals)
- [$op](util.mongopushticket.md#$op)
- [$where](util.mongopushticket.md#$where)
- [\_\_v](util.mongopushticket.md#__v)
- [\_id](util.mongopushticket.md#_id)
- [baseModelName](util.mongopushticket.md#basemodelname)
- [collection](util.mongopushticket.md#collection)
- [db](util.mongopushticket.md#db)
- [errors](util.mongopushticket.md#errors)
- [id](util.mongopushticket.md#id)
- [isNew](util.mongopushticket.md#isnew)
- [modelName](util.mongopushticket.md#modelname)
- [receiptId](util.mongopushticket.md#receiptid)
- [schema](util.mongopushticket.md#schema)
- [status](util.mongopushticket.md#status)
- [userId](util.mongopushticket.md#userid)

### Methods

- [$ignore](util.mongopushticket.md#$ignore)
- [$isDefault](util.mongopushticket.md#$isdefault)
- [$isDeleted](util.mongopushticket.md#$isdeleted)
- [$isEmpty](util.mongopushticket.md#$isempty)
- [$isValid](util.mongopushticket.md#$isvalid)
- [$markValid](util.mongopushticket.md#$markvalid)
- [$session](util.mongopushticket.md#$session)
- [$set](util.mongopushticket.md#$set)
- [delete](util.mongopushticket.md#delete)
- [deleteOne](util.mongopushticket.md#deleteone)
- [depopulate](util.mongopushticket.md#depopulate)
- [directModifiedPaths](util.mongopushticket.md#directmodifiedpaths)
- [equals](util.mongopushticket.md#equals)
- [execPopulate](util.mongopushticket.md#execpopulate)
- [get](util.mongopushticket.md#get)
- [getChanges](util.mongopushticket.md#getchanges)
- [increment](util.mongopushticket.md#increment)
- [init](util.mongopushticket.md#init)
- [invalidate](util.mongopushticket.md#invalidate)
- [isDirectModified](util.mongopushticket.md#isdirectmodified)
- [isDirectSelected](util.mongopushticket.md#isdirectselected)
- [isInit](util.mongopushticket.md#isinit)
- [isModified](util.mongopushticket.md#ismodified)
- [isSelected](util.mongopushticket.md#isselected)
- [markModified](util.mongopushticket.md#markmodified)
- [model](util.mongopushticket.md#model)
- [modifiedPaths](util.mongopushticket.md#modifiedpaths)
- [overwrite](util.mongopushticket.md#overwrite)
- [populate](util.mongopushticket.md#populate)
- [populated](util.mongopushticket.md#populated)
- [remove](util.mongopushticket.md#remove)
- [replaceOne](util.mongopushticket.md#replaceone)
- [save](util.mongopushticket.md#save)
- [set](util.mongopushticket.md#set)
- [toJSON](util.mongopushticket.md#tojson)
- [toObject](util.mongopushticket.md#toobject)
- [unmarkModified](util.mongopushticket.md#unmarkmodified)
- [update](util.mongopushticket.md#update)
- [updateOne](util.mongopushticket.md#updateone)
- [validate](util.mongopushticket.md#validate)
- [validateSync](util.mongopushticket.md#validatesync)

## Properties

### $locals

• **$locals**: *Record*<string, unknown\>

Empty object that you can use for storing properties on the document. This
is handy for passing data to middleware without conflicting with Mongoose
internals.

Defined in: node_modules/mongoose/index.d.ts:402

___

### $op

• **$op**: *null* \| *string*

A string containing the current operation that Mongoose is executing
on this document. May be `null`, `'save'`, `'validate'`, or `'remove'`.

Defined in: node_modules/mongoose/index.d.ts:411

___

### $where

• **$where**: *Record*<string, unknown\>

Additional properties to attach to the query when calling `save()` and `isNew` is false.

Defined in: node_modules/mongoose/index.d.ts:426

___

### \_\_v

• `Optional` **\_\_v**: *undefined* \| *number*

This documents __v.

Defined in: node_modules/mongoose/index.d.ts:376

___

### \_id

• **\_id**: *string*

Defined in: [packages/ui/src/util/types.ts:57](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L57)

___

### baseModelName

• `Optional` **baseModelName**: *undefined* \| *string*

If this is a discriminator model, `baseModelName` is the name of the base model.

Defined in: node_modules/mongoose/index.d.ts:429

___

### collection

• **collection**: *Collection*

Collection the model uses.

Defined in: node_modules/mongoose/index.d.ts:432

___

### db

• **db**: *Connection*

Connection the model uses.

Defined in: node_modules/mongoose/index.d.ts:435

___

### errors

• `Optional` **errors**: *undefined* \| *ValidationError*

Hash containing current validation errors.

Defined in: node_modules/mongoose/index.d.ts:465

___

### id

• `Optional` **id**: *any*

The string version of this documents _id.

Defined in: node_modules/mongoose/index.d.ts:481

___

### isNew

• **isNew**: *boolean*

Boolean flag specifying if the document is new.

Defined in: node_modules/mongoose/index.d.ts:512

___

### modelName

• **modelName**: *string*

The name of the model

Defined in: node_modules/mongoose/index.d.ts:527

___

### receiptId

• `Optional` **receiptId**: *undefined* \| *string*

Defined in: [packages/ui/src/util/types.ts:50](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L50)

___

### schema

• **schema**: *Schema*<Document<any\>, Model<Document<any\>\>, undefined\>

The document's schema.

Defined in: node_modules/mongoose/index.d.ts:561

___

### status

• **status**: *ok* \| *error*

Defined in: node_modules/expo-server-sdk/build/ExpoClient.d.ts:72

___

### userId

• **userId**: *string*

Defined in: [packages/ui/src/util/types.ts:51](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L51)

## Methods

### $ignore

▸ **$ignore**(`path`: *string*): *void*

Don't run validation on this path or persist changes to this path.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:379

___

### $isDefault

▸ **$isDefault**(`path`: *string*): *boolean*

Checks if a path is set to its default.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:382

___

### $isDeleted

▸ **$isDeleted**(`val?`: *boolean*): *boolean*

Getter/setter, determines whether the document was removed or not.

#### Parameters:

Name | Type |
:------ | :------ |
`val?` | *boolean* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:385

___

### $isEmpty

▸ **$isEmpty**(`path`: *string*): *boolean*

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:392

___

### $isValid

▸ **$isValid**(`path`: *string*): *boolean*

Checks if a path is invalid

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:395

___

### $markValid

▸ **$markValid**(`path`: *string*): *void*

Marks a path as valid, removing existing validation errors.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:405

___

### $session

▸ **$session**(`session?`: *null* \| *ClientSession*): *ClientSession*

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters:

Name | Type |
:------ | :------ |
`session?` | *null* \| *ClientSession* |

**Returns:** *ClientSession*

Defined in: node_modules/mongoose/index.d.ts:418

___

### $set

▸ **$set**(`path`: *string*, `val`: *any*, `options?`: *any*): [*MongoPushTicket*](util_types.mongopushticket.md)

Alias for `set()`, used internally to avoid conflicts

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`val` | *any* |
`options?` | *any* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:421

▸ **$set**(`path`: *string*, `val`: *any*, `type`: *any*, `options?`: *any*): [*MongoPushTicket*](util_types.mongopushticket.md)

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`val` | *any* |
`type` | *any* |
`options?` | *any* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:422

▸ **$set**(`value`: *any*): [*MongoPushTicket*](util_types.mongopushticket.md)

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:423

___

### delete

▸ **delete**(`options?`: QueryOptions): *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Removes this document from the db.

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | QueryOptions |

**Returns:** *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:438

▸ **delete**(`options?`: QueryOptions, `cb?`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | QueryOptions |
`cb?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:439

___

### deleteOne

▸ **deleteOne**(`options?`: QueryOptions): *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Removes this document from the db.

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | QueryOptions |

**Returns:** *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:442

▸ **deleteOne**(`options?`: QueryOptions, `cb?`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | QueryOptions |
`cb?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:443

___

### depopulate

▸ **depopulate**(`path`: *string*): [*MongoPushTicket*](util_types.mongopushticket.md)

Takes a populated field and returns it to its unpopulated state.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:446

___

### directModifiedPaths

▸ **directModifiedPaths**(): *string*[]

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, { foo: 'bar' })`, or `doc.set('foo', 'bar')`.

**Returns:** *string*[]

Defined in: node_modules/mongoose/index.d.ts:453

___

### equals

▸ **equals**(`doc`: *Document*<any\>): *boolean*

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters:

Name | Type |
:------ | :------ |
`doc` | *Document*<any\> |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:462

___

### execPopulate

▸ **execPopulate**(): *Promise*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Explicitly executes population and returns a promise. Useful for promises integration.

**Returns:** *Promise*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:468

▸ **execPopulate**(`callback`: (`err`: CallbackError, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`err`: CallbackError, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:469

___

### get

▸ **get**(`path`: *string*, `type?`: *any*, `options?`: *any*): *any*

Returns the value of a path.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`type?` | *any* |
`options?` | *any* |

**Returns:** *any*

Defined in: node_modules/mongoose/index.d.ts:472

___

### getChanges

▸ **getChanges**(): *UpdateQuery*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

**Returns:** *UpdateQuery*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:478

___

### increment

▸ **increment**(): [*MongoPushTicket*](util_types.mongopushticket.md)

Signal that we desire an increment of this documents version.

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:484

___

### init

▸ **init**(`obj`: *any*, `opts?`: *any*, `cb?`: (`err`: CallbackError, `doc`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): [*MongoPushTicket*](util_types.mongopushticket.md)

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *any* |
`opts?` | *any* |
`cb?` | (`err`: CallbackError, `doc`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:491

___

### invalidate

▸ **invalidate**(`path`: *string*, `errorMsg`: *string* \| *NativeError*, `value?`: *any*, `kind?`: *string*): CallbackError

Marks a path as invalid, causing validation to fail.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`errorMsg` | *string* \| *NativeError* |
`value?` | *any* |
`kind?` | *string* |

**Returns:** CallbackError

Defined in: node_modules/mongoose/index.d.ts:494

___

### isDirectModified

▸ **isDirectModified**(`path`: *string*): *boolean*

Returns true if `path` was directly set and modified, else false.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:497

___

### isDirectSelected

▸ **isDirectSelected**(`path`: *string*): *boolean*

Checks if `path` was explicitly selected. If no projection, always returns true.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:500

___

### isInit

▸ **isInit**(`path`: *string*): *boolean*

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:503

___

### isModified

▸ **isModified**(`path?`: *string* \| *string*[]): *boolean*

Returns true if any of the given paths is modified, else false. If no arguments, returns `true` if any path
in this document is modified.

#### Parameters:

Name | Type |
:------ | :------ |
`path?` | *string* \| *string*[] |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:509

___

### isSelected

▸ **isSelected**(`path`: *string*): *boolean*

Checks if `path` was selected in the source query which initialized this document.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *boolean*

Defined in: node_modules/mongoose/index.d.ts:515

___

### markModified

▸ **markModified**(`path`: *string*, `scope?`: *any*): *void*

Marks the path as having pending changes to write to the db.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`scope?` | *any* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:518

___

### model

▸ **model**<T\>(`name`: *string*): T

Returns another Model instance.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *Model*<any, T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** T

Defined in: node_modules/mongoose/index.d.ts:524

___

### modifiedPaths

▸ **modifiedPaths**(`options?`: { `includeChildren?`: *undefined* \| *boolean*  }): *string*[]

Returns the list of paths that have been modified.

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | *object* |
`options.includeChildren?` | *undefined* \| *boolean* |

**Returns:** *string*[]

Defined in: node_modules/mongoose/index.d.ts:521

___

### overwrite

▸ **overwrite**(`obj`: *\_AllowStringsForIds*<Pick<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>\>): [*MongoPushTicket*](util_types.mongopushticket.md)

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *\_AllowStringsForIds*<Pick<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>\> |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:534

___

### populate

▸ **populate**(`path`: *string*, `callback?`: (`err`: CallbackError, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): [*MongoPushTicket*](util_types.mongopushticket.md)

Populates document references, executing the `callback` when complete.
If you want to use promises instead, use this function with
[`execPopulate()`](#document_Document-execPopulate).

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`callback?` | (`err`: CallbackError, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:541

▸ **populate**(`path`: *string*, `names`: *string*, `callback?`: (`err`: *any*, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): [*MongoPushTicket*](util_types.mongopushticket.md)

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`names` | *string* |
`callback?` | (`err`: *any*, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:542

▸ **populate**(`opts`: PopulateOptions \| PopulateOptions[], `callback?`: (`err`: CallbackError, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): [*MongoPushTicket*](util_types.mongopushticket.md)

#### Parameters:

Name | Type |
:------ | :------ |
`opts` | PopulateOptions \| PopulateOptions[] |
`callback?` | (`err`: CallbackError, `res`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:543

___

### populated

▸ **populated**(`path`: *string*): *any*

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *any*

Defined in: node_modules/mongoose/index.d.ts:546

___

### remove

▸ **remove**(`options?`: QueryOptions): *Promise*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Removes this document from the db.

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | QueryOptions |

**Returns:** *Promise*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:549

▸ **remove**(`options?`: QueryOptions, `cb?`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | QueryOptions |
`cb?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:550

___

### replaceOne

▸ **replaceOne**(`replacement?`: *\_AllowStringsForIds*<Pick<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>\>, `options?`: *null* \| QueryOptions, `callback?`: (`err`: *any*, `res`: *any*) => *void*): *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters:

Name | Type |
:------ | :------ |
`replacement?` | *\_AllowStringsForIds*<Pick<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>\> |
`options?` | *null* \| QueryOptions |
`callback?` | (`err`: *any*, `res`: *any*) => *void* |

**Returns:** *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:553

___

### save

▸ **save**(`options?`: SaveOptions): *Promise*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Saves this document by inserting a new document into the database if [document.isNew](/docs/api.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | SaveOptions |

**Returns:** *Promise*<[*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:556

▸ **save**(`options?`: SaveOptions, `fn?`: (`err`: CallbackError, `doc`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | SaveOptions |
`fn?` | (`err`: CallbackError, `doc`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:557

▸ **save**(`fn?`: (`err`: CallbackError, `doc`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`fn?` | (`err`: CallbackError, `doc`: [*MongoPushTicket*](util_types.mongopushticket.md)) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:558

___

### set

▸ **set**(`path`: *string*, `val`: *any*, `options?`: *any*): [*MongoPushTicket*](util_types.mongopushticket.md)

Sets the value of a path, or many paths.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`val` | *any* |
`options?` | *any* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:564

▸ **set**(`path`: *string*, `val`: *any*, `type`: *any*, `options?`: *any*): [*MongoPushTicket*](util_types.mongopushticket.md)

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`val` | *any* |
`type` | *any* |
`options?` | *any* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:565

▸ **set**(`value`: *any*): [*MongoPushTicket*](util_types.mongopushticket.md)

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** [*MongoPushTicket*](util_types.mongopushticket.md)

Defined in: node_modules/mongoose/index.d.ts:566

___

### toJSON

▸ **toJSON**(`options?`: ToObjectOptions): *Pick*<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>

The return value of this method is used in calls to JSON.stringify(doc).

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | ToObjectOptions |

**Returns:** *Pick*<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>

Defined in: node_modules/mongoose/index.d.ts:569

▸ **toJSON**<T\>(`options?`: ToObjectOptions): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | ToObjectOptions |

**Returns:** T

Defined in: node_modules/mongoose/index.d.ts:570

___

### toObject

▸ **toObject**(`options?`: ToObjectOptions): *Pick*<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | ToObjectOptions |

**Returns:** *Pick*<Pick<\_LeanDocument<[*MongoPushTicket*](util_types.mongopushticket.md)\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>, *_id* \| *__v* \| *id* \| *status* \| *receiptId* \| *userId*\>

Defined in: node_modules/mongoose/index.d.ts:573

▸ **toObject**<T\>(`options?`: ToObjectOptions): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | ToObjectOptions |

**Returns:** T

Defined in: node_modules/mongoose/index.d.ts:574

___

### unmarkModified

▸ **unmarkModified**(`path`: *string*): *void*

Clears the modified state on the specified path.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:577

___

### update

▸ **update**(`update?`: *UpdateQuery*<[*MongoPushTicket*](util_types.mongopushticket.md)\>, `options?`: *null* \| QueryOptions, `callback?`: (`err`: CallbackError, `res`: *any*) => *void*): *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Sends an update command with this document `_id` as the query selector.

#### Parameters:

Name | Type |
:------ | :------ |
`update?` | *UpdateQuery*<[*MongoPushTicket*](util_types.mongopushticket.md)\> |
`options?` | *null* \| QueryOptions |
`callback?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:580

___

### updateOne

▸ **updateOne**(`update?`: *UpdateQuery*<[*MongoPushTicket*](util_types.mongopushticket.md)\>, `options?`: *null* \| QueryOptions, `callback?`: (`err`: CallbackError, `res`: *any*) => *void*): *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters:

Name | Type |
:------ | :------ |
`update?` | *UpdateQuery*<[*MongoPushTicket*](util_types.mongopushticket.md)\> |
`options?` | *null* \| QueryOptions |
`callback?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *Query*<any, [*MongoPushTicket*](util_types.mongopushticket.md)\>

Defined in: node_modules/mongoose/index.d.ts:583

___

### validate

▸ **validate**(`pathsToValidate?`: *string*[], `options?`: *any*): *Promise*<void\>

Executes registered validation rules for this document.

#### Parameters:

Name | Type |
:------ | :------ |
`pathsToValidate?` | *string*[] |
`options?` | *any* |

**Returns:** *Promise*<void\>

Defined in: node_modules/mongoose/index.d.ts:586

▸ **validate**(`callback`: (`err`: CallbackError) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`err`: CallbackError) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:587

▸ **validate**(`pathsToValidate`: *string*[], `callback`: (`err`: CallbackError) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pathsToValidate` | *string*[] |
`callback` | (`err`: CallbackError) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:588

▸ **validate**(`pathsToValidate`: *string*[], `options`: *any*, `callback`: (`err`: CallbackError) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pathsToValidate` | *string*[] |
`options` | *any* |
`callback` | (`err`: CallbackError) => *void* |

**Returns:** *void*

Defined in: node_modules/mongoose/index.d.ts:589

___

### validateSync

▸ **validateSync**(`pathsToValidate?`: *string*[], `options?`: *any*): CallbackError

Executes registered validation rules (skipping asynchronous validators) for this document.

#### Parameters:

Name | Type |
:------ | :------ |
`pathsToValidate?` | *string*[] |
`options?` | *any* |

**Returns:** CallbackError

Defined in: node_modules/mongoose/index.d.ts:592
