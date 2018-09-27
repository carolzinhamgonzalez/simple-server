// aqui vou manipular os dados da api para extrair os dados de cada país

// API casos Zika
// fetch('http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi').then(response => response.json()).then(data => console.log(data))
// http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi

function erro(){
  console.log('erro');
};

// Porque o link da API é um template??
const url = `http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi`;

function api (){
  // event.preventDefault();
  $.ajax({
    type:'GET',
    url,
    success: casesZikas,
    error: erro
  })
};

// lets utilizadas em functions na manipulação da api
let weeks;
let objCountries;

function casesZikas(data){
  // const base = data;
  weeks = data.cases;
  // console.log(weeks);
  objWeek();
  countryLa();
};

function objWeek(){
  const regex_year= new RegExp(/(2017)/g);
  const keyObj = Object.keys(weeks);
  const arrWeek = keyObj.filter((value) => {
    if (value.match(regex_year)){
      return true
    } else {
      return false
    }
  });
  objCountries = arrWeek.forEach((data) => {
    console.log(weeks[data]);
    // return weeks[data];
  });
  console.log(objCountries);
};

function countryLa(){
  const regex_la= new RegExp(/(bra)|(mex)|(chl)|(per)|(arg)|(bol)|(pry)|(ury)|(col)|(ecu)|(ven)|(cri)|(cub)|(slv)|(gtn)|(hti)|(hnd)|(nic)|(pan)|(dom)/g);
  const keyObj = Object.keys(objCountries);
  const arrCountries = keyObj.filter((value) => {
    if (value.match(regex_la)){
      return true
    } else {
      return false
    }
  });
  const objLa = arrCountries.forEach((data) => {
    console.log(objCountries[data]);
  });

}
