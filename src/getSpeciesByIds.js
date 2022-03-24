const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((id) => {
    const getSpecie = species.find((animal) => animal.id === id);
    if (getSpecie) {
      // se getSpecie existir empurra o valor do find para dentro de um array vazio para conseguir retorna o valor.
      result.push(getSpecie);
    }
  });
  // retornar o array com o valor armazenado.
  return result;
}

module.exports = getSpeciesByIds;
