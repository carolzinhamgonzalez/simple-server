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
let autochthonous, exterior, birth, birthPro, deaths, gbs, nameCountry;
let brasil, chile, peru, bolivia;


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

    // autochthonous = resultYear.autochthonous_cases_confirmed;
    // exterior = resultYear.imported_cases;
    // birth = resultYear.confirmed_congenital;
    // birthPro = resultYear.congenital_probable;
    // deaths = resultYear.deaths;
    // gbs = resultYear.gbs_confirmed;
    // nameCountry = resultYear.country;

    return resultYear;
  };
  brasil = cases('bra');
  chile = cases('chl');
  peru = cases('per');
  bolivia = cases('bol');
  // console.log(padrao('bra'));
   // console.log(padrao('mex'));
  console.log(brasil);
};

function clickBra() {
  $("#teste").html(`
    <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
    Região das Américas desde 2015.</p>
    <p> No <strong>${brasil.country}</strong> somente em 2017 foram registrados:</p>
    <div id="show-data">
      <p> ${brasil.autochthonous_cases_confirmed} casos contraídos no país.</p>
      <p> ${brasil.imported_cases} casos contraídos no exterior.</p>
      <p> ${brasil.deaths} mortes.</p>
      <p> ${brasil.confirmed_congenital} crianças que nasceram com o zika vírus e ${brasil.congenital_probable} casos com probabilidade de vir a nascer com o vírus. </p>
    </div>
    `);
};

function clickChl() {
  $("#teste").html(`
    <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
    Região das Américas desde 2015.</p>
    <p> No <strong>${chile.country}</strong> somente em 2017 foram registrados:</p>
    <div id="show-data">
      <p> ${chile.autochthonous_cases_confirmed} casos contraídos no país.</p>
      <p> ${chile.imported_cases} casos contraídos no exterior.</p>
      <p> ${chile.deaths} mortes.</p>
      <p> ${chile.confirmed_congenital} crianças que nasceram com o zika vírus. </p>
    </div>
    `);
};

function clickPer() {
  $("#teste").html(`
    <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
    Região das Américas desde 2015.</p>
    <p> No <strong>${peru.country}</strong> somente em 2017 foram registrados:</p>
    <div id="show-data">
      <p> ${peru.autochthonous_cases_confirmed} casos contraídos no país.</p>
      <p> ${peru.imported_cases} casos contraídos no exterior.</p>
      <p> ${peru.deaths} mortes.</p>
      <p> ${peru.confirmed_congenital} crianças que nasceram com o zika víruse ${peru.congenital_probable} casos com probabilidade de vir a nascer com o vírus. </p>
    </div>
    `);
};

function clickBol() {
  $("#teste").html(`
    <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
    Região das Américas desde 2015.</p>
    <p> No <strong>${bolivia.country}</strong> somente em 2017 foram registrados:</p>
    <div id="show-data">
      <p> ${bolivia.autochthonous_cases_confirmed} casos contraídos no país.</p>
      <p> ${bolivia.imported_cases} casos contraídos no exterior.</p>
      <p> ${bolivia.deaths} mortes.</p>
      <p> ${bolivia.confirmed_congenital} crianças que nasceram com o zika vírus e ${bolivia.congenital_probable} casos com probabilidade de vir a nascer com o vírus. </p>
    </div>
    `);
};
