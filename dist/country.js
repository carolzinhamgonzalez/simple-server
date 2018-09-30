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
let objCountries = [];
let objLa = [];

function casesZikas(data){
  weeks = data.cases;
  objWeek();
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
  });
  // console.log(objCountries);

  function cases(country){
    let dataCountry = [];
    for (i in objCountries){
      dataCountry.push(objCountries[i][country]);
    };
    console.log(dataCountry);
    const resultYear = $(dataCountry).get(-1);
    // const n = 1;
    // while (resultYear === undefined | "") {
    //   $(dataCountry).get(-(n+))
    // };

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

    return resultYear;
  };

  // console.log(padrao('bra'));
  // console.log(padrao('mex'));
  console.log(padrao('chl'));
};
