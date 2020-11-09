let idGenerators = require('./index')
let { animalId, numericId, alphanumericId } = idGenerators;
for(let i=0; i<5; i++) {
    console.log(animalId())
}
for(let i=0; i<5; i++) {
    console.log(numericId(6))
}
for(let i=0; i<5; i++) {
    console.log(alphanumericId(4, false))
}
for(let i=0; i<5; i++) {
    console.log(`${animalId()}${numericId()}_${alphanumericId(4, true)}`)
}
