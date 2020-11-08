import getAnimalId from './index.js'

for(let i=0; i<5; i++) {
    console.log(getAnimalId())
}
for(let i=0; i<5; i++) {
    console.log(getAnimalId({digitSuffix: true}))
}
for(let i=0; i<5; i++) {
    console.log(getAnimalId({alphaNumericSuffix: true}))
}
for(let i=0; i<5; i++) {
    console.log(getAnimalId({digitSuffix: true, alphaNumericSuffix: true}))
}
