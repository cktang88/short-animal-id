## short-animal-id

Generates short ids with animal name prefixes. This strives for easily pronunciable and short IDs.

**NOTE**: This package is not cryptographically random, nor are IDs guaranteed to be unique.

### Options

```js
const defaultOpts = { digitSuffix: false, alphaNumericSuffix: false };
```

### Examples

```js
import getAnimalId from 'short-animal-id'

getAnimalId()
/**
Grouse
Oryx
Raven
Squid
Dinosaur
*/


getAnimalId({digitSuffix: true})
/**
Turtle7
Bee0
Antelope8
Hedgehog8
Raccoon5
*/

getAnimalId({alphaNumericSuffix: true})
/**
Salamander_fnels
Flamingo_gbj1h
Grasshopper_wh861
Dog_6jpcx
Bee_1jr8y
*/

getAnimalId({digitSuffix: true, alphaNumericSuffix: true}))
/**
Cattle6_wkk9g
Cockroach7_kazrp
Goldfish1_t4rjc
Oryx1_jztpm
Partridge8_ev65i
*/
```
