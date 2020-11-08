let {animalId, numericId, alphaNumericId} = require('./index')
for(let i=0; i<5; i++) {
    console.log(animalId())
}
for(let i=0; i<5; i++) {
    console.log(numericId(6))
}
for(let i=0; i<5; i++) {
    console.log(alphaNumericId())
}
for(let i=0; i<5; i++) {
    console.log(`${animalId()}${numericId()}_${alphaNumericId()}`)
}
