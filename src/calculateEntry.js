const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const testObjeto = {
    child: entrants.filter((elemento) => elemento.age < 18).length,
    adult: entrants.filter((elemento1) => elemento1.age >= 18 && elemento1.age < 50).length,
    senior: entrants.filter((elemento3) => elemento3.age >= 50).length,
  };
  return testObjeto;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const child = entrants.filter((elem) => elem.age < 18).length * prices.child;
  const adult = entrants.filter((elem1) => elem1.age >= 18 && elem1.age < 50).length * prices.adult;
  const senior = entrants.filter((elem3) => elem3.age >= 50).length * prices.senior;
  const soma = child + adult + senior;
  return soma;
}

module.exports = { calculateEntry, countEntrants };
