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
let arrWeek;
let arrCountries;
let objCountries;
let objLa;

function casesZikas(data){
  weeks = data.cases;
  objWeek();


};

function objWeek(){
  const regex_year= new RegExp(/(2017)/g);
  const keyObj = Object.keys(weeks);
  arrWeek = keyObj.filter((value) => {
    if (value.match(regex_year)){
      return true
    } else {
      return false
    }
  });

  function objCountries() {
    let result;
    arrWeek.forEach((data) => {
      result = weeks[data];
    });
    return result;
  };
  objCountries = objCountries();


};



function countryLa(){
  const regex_la= new RegExp(/(bra)|(mex)|(chl)|(per)|(arg)|(bol)|(pry)|(ury)|(col)|(ecu)|(ven)|(cri)|(cub)|(slv)|(gtn)|(hti)|(hnd)|(nic)|(pan)|(dom)/g);
  const keyObj = Object.keys(objCountries);
  console.log(keyObj);
  // tentar fazer o for ou foreach como se eu eu fosse pegar um por um.. igual no dashboard..
  arrCountries = keyObj.filter((value) => {
    if (value.match(regex_la)){
      return true
    } else {
      return false
    }
  });

  function objLa() {
    let result;
    arrCountries.forEach((data) => {
      result = objCountries[data];
    });
    return result;
  };
  objLa = objLa();
};
console.log(objLa);
