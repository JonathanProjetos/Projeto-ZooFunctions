const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((id) => {
    const getSpecie = species.find((animal) => animal.id === id);
    if (getSpecie) {
      result.push(getSpecie);
    }
  });
  return result;
}

module.exports = getSpeciesByIds;
