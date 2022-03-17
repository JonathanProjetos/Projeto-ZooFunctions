const { employees } = require('../data/zoo_data');

function isManager(id) {
  const getIdName = employees
    .some((pessoa) => pessoa.managers
      .some((peessoa2) => peessoa2 === id));

  return getIdName;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((elemento1) => elemento1.managers.includes(managerId))
      .map((elemento1) => {
        const { firstName, lastName } = elemento1;
        const nomeCompleto = `${firstName} ${lastName}`;
        return nomeCompleto;
      });
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
