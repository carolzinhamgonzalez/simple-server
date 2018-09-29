function erro(){
  console.log('erro');
};

const url = `http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi`;

function api (){
  $.ajax({
    type:'GET',
    url,
    success: casesZikas,
    error: erro
  })
};

// lets utilizadas em functions na manipulação da api
let weeks;
// let arrWeek;
let objCountries = [];
let objLa = [];

function casesZikas(data){
  // const base = data;
  weeks = data.cases;
  // console.log(weeks);
  objWeek();
  // countryLa();
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
  arrWeek.forEach((data) => {
    objCountries.push(weeks[data]);
    // return weeks[data];
  });




  function padrao(country){
    let dataCountry = [];
    console.log(objCountries['0']['bra']);
    for (i in objCountries){
      dataCountry.push(objCountries[i][country]);
    };
    return dataCountry;

  };

  console.log(padrao('bra'));
};





// let test = objCountries.map(item => item[i][country]);
// return test;

// let ativas = dados.map(item => item.quantidade).reduce( (prev, item) => prev + item, 0 );
