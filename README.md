## short-animal-id

Generates short ids with animal name prefixes. This strives for easily pronunciable and short IDs.

**NOTE**: This package is not cryptographically random, nor are IDs guaranteed to be unique.

## Import

```js
import getAnimalId, { numericId, alphaNumericId } from "short-animal-id";
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

### `numericId(numDigits)`

> params:
> numDigits (1 by default)

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

### `alphaNumericId()`

```js
alphaNumericId();
/**
tunuv
p2i8m
dm94t
2zqh8
jqc2b
*/
```

## Examples

Example adding multiple ids together

```js
console.log(`${animalId()}${numericId()}_${alphaNumericId()}`);
/**
Cattle6_wkk9g
Cockroach7_kazrp
Goldfish1_t4rjc
Oryx1_jztpm
Partridge8_ev65i
*/
```
