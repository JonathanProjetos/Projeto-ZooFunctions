const { employees } = require('../data/zoo_data');

function getEmployeeByName(list) {
  if (list === undefined) {
    return {};
  }
  const getName = employees.find((nome) => nome.firstName === list || nome.lastName === list);
  return getName;
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
