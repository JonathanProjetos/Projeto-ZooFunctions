const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getAnimal = employees.find((elm) => elm.id === id);
  const testAnimal = getAnimal.responsibleFor[0];
  const specie = species.find((elem4) => elem4.id === testAnimal);
  const oneAnimal = specie.residents.sort((a, b) => b.age - a.age)[0];
  const Animal = Object.values(oneAnimal);
  return Animal;
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
// Linha 3 = A função recebe como parametro um id de uma pessoa funcionaria.
// Linha 4 = Aqui eu declarei um variavel para armazenar a condição do find que seria de dentro todas
// todas as pessoas funcionaria retorne a 1 que tiver o mesmo id da pessoa oferecida por parametro.
// Linha 5 = Achando a pessoa referente ao id pego dentro responsiblefor que um array o primeiro indeci [0];
// Linha 6 = declarei specie que armazena a busca do find que pega o elemento.id e compara com o
// testAnimal que e o primeiro id do animal que ele e responsável.
// Linha 7 =  aqui acesso a residents que e um array e organizo o primeiro item desse array utilisando o metodo sort() no
// em ordem decrescente.
// Linha 8 =  armazeno o metodo object.values para pegar o valor das chaves que seria nome, sexo, idade.
// Linha 9 = retorno a função;
