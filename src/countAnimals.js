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
// console.log(species.filter((elem) => elem.name === 'lions').find((elem1)=> elem1.residents).residents.filter((elem2) => elem2.sex === sex));
module.exports = countAnimals;

// Linha 04 =  foi feito um if para verificar se o parâmetro animal e vazio ou seja indefinido, caso seja ele vai entra no if.
// Linha 05, 06  =  foi declarado a variavel adicionaAnimal que está criando um objeto com o nome do animal e a quantidade do animal por tipo ex: 'lions:4, otther: 6 ... a quanditade de criação se'
// Linha 07 = acc retorna o objeto com os valores name do animal mais a quantidade.
// Linha 11 = foi feito um destructuring do parametro que virá para a função e podendo pegar o valor da chave dos objetos ex: recebo isso { specie: 'bears', sex: 'female' } , { specie, sex } = animal podendo acessar o nome do animal e o sexo.
// Linha 12 = foi feito o if para validar se dentro do parametro animal que é parametro da função countAnimal tem a propriedade sex, se sim executa o if.
// Linha 13 = fiz uma variavel que estou filtrando dentro de species o elemento cujo o nome seja igual ao valor da chave specie 'que e um animal' quem vem como parametro da função.
// Linha 14 - 15 = pegando o resultado de getsex utilizo o find para procurar dentro do primeiro resultado do filter por resident.
// residents e um outro array ae faço outro filter dentro de esidents com a logica de pega os animais que tenha o menos sexo que se pede por parametro o resultado quero no formato valor
// quantidade por sexo então utilizei o length.
// Linha 18 = if verificar se o valor de entrada na função tem a chave com o nome specie, se sim executa o bloco if.
// Linha 19 = foi feito uma variavel q vai armazena a a quantidade de animais pelo tipo de animal, 1 animal por vez.
// Linha 20 = aqui retorna a quantidade de animal.
