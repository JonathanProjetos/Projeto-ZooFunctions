const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpecie = species.filter((elemento) => elemento.name === animal);
  const verify = getSpecie[0].residents.every((listaAnimal) => listaAnimal.age >= age);
  return verify;
}

console.log(getAnimalsOlderThan('otters', 7));
console.log(species);
module.exports = getAnimalsOlderThan;
