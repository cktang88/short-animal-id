## short-animal-id

Generates short ids with animal name prefixes. This strives for easily pronunciable and short IDs.

**NOTE**: This package is not cryptographically random, nor are IDs guaranteed to be unique.

## Import

```js
import idGenerators from "short-animal-id";
let { animalId, numericId, alphanumericId } = idGenerators;
```

## API

### `animalId()`

```js
animalId();
/**
Grouse
Oryx
Raven
Squid
Dinosaur
*/
```

### `numericId(length)`

> params:
> length (1 by default)

```js
numericId(6);
/**
734254
408672
211560
044299
714564
*/
```

### `alphanumericId(length, includeUppercase)`

> params:
> length (1 by default)
> includeUppercase (false by default)

```js
alphanumericId();
/**
vh1o
h361
fbbh
gm5i
tc64
*/
```

## Examples

Example adding multiple ids together

```js
console.log(`${animalId()}${numericId()}_${alphanumericId()}`);
/**
Crane0_P06H
Sandpiper3_6Xzs
Squid6_uPFL
Turkey8_ndIG
Pheasant4_Jdm6
*/
```
