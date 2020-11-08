// types generated via:
// npx typescript ./index.js --declaration --allowJs --emitDeclarationOnly --outDir types

import animals from "./animals.js";

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]

function generateAlphaNumeric() {
  // maybe use https://www.npmjs.com/package/human-id for funny unit names?
  // or return shortid.generate().substring(0, 5);

  // from https://gist.github.com/6174/6062387
  return Math.random().toString(36).substring(2, 7);
}


export default function animalId() {
  return pickRandom(animals)
}

export function numericId(numDigits=1) {
  let res= ''
  for(let i=0; i<numDigits; i++) {
    res += Math.floor(Math.random() * 10)
  }
  return res
}

export function alphaNumericId() {
  return generateAlphaNumeric()
}
