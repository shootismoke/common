[@shootismoke/ui](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / [slugify](../modules/index.slugify.md) / Options

# Interface: Options

[index](../modules/index.md).[slugify](../modules/index.slugify.md).Options

## Table of contents

### Properties

- [customReplacements](index.slugify.options.md#customreplacements)
- [decamelize](index.slugify.options.md#decamelize)
- [lowercase](index.slugify.options.md#lowercase)
- [preserveLeadingUnderscore](index.slugify.options.md#preserveleadingunderscore)
- [separator](index.slugify.options.md#separator)

## Properties

### customReplacements

• `Optional` `Readonly` **customReplacements**: *undefined* \| readonly [*string*, *string*][]

Add your own custom replacements.

The replacements are run on the original string before any other transformations.

This only overrides a default replacement if you set an item with the same key, like `&`.

Add a leading and trailing space to the replacement to have it separated by dashes.

**`default`** [ ['&', ' and '], ['🦄', ' unicorn '], ['♥', ' love '] ]

**`example`** 
```
import slugify = require('@sindresorhus/slugify');

slugify('Foo@unicorn', {
customReplacements: [
['@', 'at']
]
});
//=> 'fooatunicorn'

slugify('foo@unicorn', {
customReplacements: [
['@', ' at ']
]
});
//=> 'foo-at-unicorn'

slugify('I love 🐶', {
customReplacements: [
['🐶', 'dogs']
]
});
//=> 'i-love-dogs'
```

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:95

___

### decamelize

• `Optional` `Readonly` **decamelize**: *undefined* \| *boolean*

Convert camelcase to separate words. Internally it does `fooBar` → `foo bar`.

**`default`** true

**`example`** 
```
import slugify = require('@sindresorhus/slugify');

slugify('fooBar');
//=> 'foo-bar'

slugify('fooBar', {decamelize: false});
//=> 'foobar'
```

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:56

___

### lowercase

• `Optional` `Readonly` **lowercase**: *undefined* \| *boolean*

Make the slug lowercase.

**`default`** true

**`example`** 
```
import slugify = require('@sindresorhus/slugify');

slugify('Déjà Vu!');
//=> 'deja-vu'

slugify('Déjà Vu!', {lowercase: false});
//=> 'Deja-Vu'
```

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:38

___

### preserveLeadingUnderscore

• `Optional` `Readonly` **preserveLeadingUnderscore**: *undefined* \| *boolean*

If your string starts with an underscore, it will be preserved in the slugified string.

Sometimes leading underscores are intentional, for example, filenames representing hidden paths on a website.

**`default`** false

**`example`** 
```
import slugify = require('@sindresorhus/slugify');

slugify('_foo_bar');
//=> 'foo-bar'

slugify('_foo_bar', {preserveLeadingUnderscore: true});
//=> '_foo-bar'
```

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:115

___

### separator

• `Optional` `Readonly` **separator**: *undefined* \| *string*

**`default`** '-'

**`example`** 
```
import slugify = require('@sindresorhus/slugify');

slugify('BAR and baz');
//=> 'bar-and-baz'

slugify('BAR and baz', {separator: '_'});
//=> 'bar_and_baz'

slugify('BAR and baz', {separator: ''});
//=> 'barandbaz'
```

Defined in: node_modules/@sindresorhus/slugify/index.d.ts:20
