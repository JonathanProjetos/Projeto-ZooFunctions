const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const adicinaAnimal = species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
    return adicinaAnimal;
  }
  const { specie, sex } = animal;
  if (Object.keys(animal).includes('sex')) {
    const getSex = species.filter((elemento) => elemento.name === specie);
    return getSex.find((elemento1) => elemento1.residents).residents
      .filter((elemento2) => elemento2.sex === sex).length;
  }

  if (Object.keys(animal).includes('specie')) {
    const getAmount = species.find((listAnimal) => listAnimal.name === specie).residents.length;
    return getAmount;
  }
}
console.log(countAnimals());

module.exports = countAnimals;
