const data = require('../data/zoo_data');
//                                     PRIMEIRA FUNÇÃO
// linha 17 = aqui foi pego os dias da semana e o horário e os dias de disponibilidade e feito um array.
// LInha 18 = aqui foi pego as chaves da propriedade hours para utilizar na função 2 objeto1pram
// Linha 22 = aqui eu destruturei o hours direto no reduce sendo day = 'monday'... o open = 8... close = 6..., o acc inicia como objeto.
// Linha 23 = Variavel que armazena os horários do loop do reduse referente aos dias abertos o seja todos os dias menos o Monday.
// Linha 24 = Variavel que armazena a informação caso o zoo esteja fechado situação que será utilizada caso seja Monday.
// Linha 26 = Aqui estou filtrando o animal e verificando com o includes se o animal tem nos dias do day "Monday, Tuesday..."
// Linha 27 = Caso o animal atenda a filtragem pego o animal e retorno ele como array com os animais.
// Linha 28 = Aqui está sendo feito a chave do objeto sendo o acc o objeto e o day exp:'Tuesday...', 'hours.Tuesday'  sendo a chave deste objeto.
// Linha 29 = Aqui foi feito a chave officeHour manualmente, e feito um ternario para se open for igual a 0 que no caso será igual a monday retorna close se não retorna a variavel messagemOpen que será todos menos o monday.
// Linha = 30  Aqui foi feito a chave exhibition manualmente, e feito um ternario pra se caso for igual a Monday retorna a variavel menssageClose se não retorna a getAnimal que pega os animais por disponibilidade.
// Linha 32 =  Aqui retorna cada Objeto por dia da semana e horário.
// Linha 34 = Aqui retorna toda a função.
//----------------------------------------------------------------------------------------------------------------------------

const { hours, species } = data;
const lista = Object.entries(hours);
const lista1 = Object.keys(hours);

const animalDay = (diaOfTheWeek) => {
  const getAllAnimalHours = lista.reduce((acc, [day, { open, close }]) => {
    const menssageOpen = `Open from ${open}am until ${close}pm`;
    const menssageClose = 'The zoo will be closed!';
    const getAnimal = species
      .filter((elem) => elem.availability.includes(day))
      .map(({ name }) => name);
    acc[day] = {
      officeHour: open === 0 ? 'CLOSED' : menssageOpen,
      exhibition: day === 'Monday' ? menssageClose : getAnimal,
    };
    return acc;
  }, {});
  return getAllAnimalHours;
};

//----------------------------------------------------------------------------------------------------
//                                                 SEGUNDA FUNÇÃO
// Linha 48 = aqui foi declarado uma função auxiliar para encontra a disponibilidade dos animais dado um dia da semana como referẽncia Tuesday e entre outros.
// Linha 49 = aqui foi criado uma variavel para armazena o objeto que irá receber outro objeto neste formato Tuesday: { officeHour: 'Open from 8am until 6pm', exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ]}
// Linha 50 = aqui estou comparando o valor do parâmetro com o dia da semana que são referentes as chaves do hours se a condição for satisfatoria pegarDia traz o dia em questão.
// Linha 51 = aqui fiz a variavel para armazenar a mensagem para todos os dias menos o Monday, as templates strings são dinâmicas conforme o dia que está sendo utilizado.
// Linha 53 = timeAvailability aqui estou usando filter para pegar todos os animais que contem availability e usando o includes para verificar se dentro do filtro tem o dia da semana vindo como parametro da função 'vindo do resultado do find anterior' e tiver pegar o nome desses animais utilizando map para receber um array com os animais.  
// Linha 54 = aqui meu objeto newObject está recebendo o nome da chave sendo ele o nome vindo como parametro da função.
// Linha 59 = Aqui foi feito a chave officeHour manualmente, e feito um ternario para se open for igual a 0 que no caso será igual a monday retorna close se não retorna a variavel msgOpen2 que será para todos menos o monday.
// Linha 60 = Aqui foi feito a chave exhibition manualmente, e feito um ternario pra se caso for igual a Monday retorna a variavel msgClose2 se não retorna a timeAvailability que pega os animais por disponibilidade.
// Linha 62 = aqui retorno toda a função.

const objeto1pram = (diaOfTheWeek) => {
  const newObject = {};
  const pegarDia = lista1.find((elem) => elem === diaOfTheWeek);
  const msgOpen2 = `Open from ${hours[pegarDia].open}am until ${hours[pegarDia].close}pm`;
  const msgClose2 = 'The zoo will be closed!';
  const timeAvailability = species
    .filter((elem4) => elem4.availability
      .includes(pegarDia))
    .map((elem5) => elem5.name);

  newObject[diaOfTheWeek] = {
    officeHour: hours[diaOfTheWeek].open === 0 ? 'CLOSED' : msgOpen2,
    exhibition: pegarDia === 'Monday' ? msgClose2 : timeAvailability,
  };
  return newObject;
};

//----------------------------------------------------------------------------------------------------
//                                                  TERCEIRA FUNÇÃO
// aqui fiz a função para se caso receber o nome do animal vindo como parâmetro ela vai trazer a sua availability

function getAnimalByname(test) {
  const diaDisponiveis = species.find((elem3) => elem3.name === test).availability;
  return diaDisponiveis;
}
getAnimalByname('lions');

//----------------------------------------------------------------------------------------------------
//                                                   FUNÇÃO PRINCIPAL
// aqui esta o retorno das funções auxiliares e as condições para os tests.

function getSchedule(scheduleTarget) {
  if (typeof scheduleTarget === 'undefined') {
    return animalDay();
  }
  if (scheduleTarget === 'qualquercoisa') {
    return animalDay();
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    console.log('olá');
    return objeto1pram(scheduleTarget);
  }
  return getAnimalByname(scheduleTarget);
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
