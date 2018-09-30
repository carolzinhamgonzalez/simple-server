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
  console.log(objCountries);



  function padrao(country){
    let dataCountry = [];

    for (i in objCountries){
      dataCountry.push(objCountries[i][country]);
    // let interno =  objCountries.map([i][country]['autochthonous_cases_confirmed']).reduce((acum, item) => acum + item, 0);
    };
    // return dataCountry;
    console.log(dataCountry);
    const resultYear = $(dataCountry).get(-1);
    const autochthonous = resultYear.autochthonous_cases_confirmed;
    const exterior = resultYear.imported_cases;
    const birth = resultYear.confirmed_congenital;
    const birthPro = resultYear.congenital_probable;
    const deaths = resultYear.deaths;
    const gbs = resultYear.gbs_confirmed;
    console.log(autochthonous);
    console.log(exterior);
    console.log(birth);
    console.log(birthPro);
    console.log(deaths);
    console.log(gbs);

    // for (i in dataCountry){
    //   var interno = dataCountry[i]['autochthonous_cases_confirmed'];
    // };
    return resultYear;
  };

  console.log(padrao('bra'));
  console.log(padrao('mex'));
};


// var array = [1, 2, 3, 4];
// var ultimo = $(array).get(-1);
// document.write(ultimo);



// let test = objCountries.map(item => item[i][country]);
// return test;

// let ativas = dados.map(item => item.quantidade).reduce( (prev, item) => prev + item, 0 );
