"use strict";
// types generated via:
/**
npx typescript ./index.js --declaration --allowJs --emitDeclarationOnly --outDir types
*/

const animals = require('./animals')

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]

function alphanumericId(length=1, includeUppercase=false) {
   let result           = '';
   let characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
   if (includeUppercase) {
     characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   }
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function animalId() {
  return pickRandom(animals)
}

function numericId(length=1) {
  let res= ''
  for(let i=0; i<length; i++) {
    res += Math.floor(Math.random() * 10)
  }
  return res
}

module.exports = {animalId, numericId, alphanumericId}
