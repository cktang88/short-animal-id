import animals from "./animals.js";

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]

function generateAlphaNumeric() {
  // maybe use https://www.npmjs.com/package/human-id for funny unit names?
  // return shortid.generate().substring(0, 5);

  // thanks to: https://gist.github.com/6174/6062387
  return Math.random().toString(36).substring(2, 7);
}

const defaultOpts = {digitSuffix: false, alphaNumericSuffix: false}

export default function getAnimalId({digitSuffix, alphaNumericSuffix}=defaultOpts) {
  // eg. Weasel9, Gnat0, Falcon7, etc.
  let res=pickRandom(animals)
  if(digitSuffix){res += Math.floor(Math.random() * 10);}
  if (alphaNumericSuffix){res += '_' + generateAlphaNumeric();}
  return res
}

