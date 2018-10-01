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
let brasil, chile, bolivia;

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

  function cases(country){
    let dataCountry = [];
    for (i in objCountries){
      dataCountry.push(objCountries[i][country]);
    };
    console.log(dataCountry);
    const resultYear = $(dataCountry).get(-1);

    return resultYear;
  };
  brasil = cases('bra');
  chile = cases('chl');
  bolivia = cases('bol');
};

function clickBra() {
  $("main").html(`
    <div class="container d-flex justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col">
          <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
          Região das Américas desde 2015.</p>
          <p> No <strong>${brasil.country}</strong> somente em 2017 foram registrados:</p>
          <div id="show-data">
          <p class="mb-0"> ${brasil.autochthonous_cases_confirmed} casos contraídos no país.</p>
          <p class="mb-0"> ${brasil.imported_cases} casos contraídos no exterior.</p>
          <p class="mb-0"> ${brasil.deaths} mortes.</p>
          <p class="mb-0"> ${brasil.confirmed_congenital} crianças que nasceram com o zika vírus</p>
          <p class="mb-0">${brasil.congenital_probable} casos com probabilidade de vir a nascer com o vírus. </p>
          </div>
          <h4 class="mt-4"><a class="link-externo" href=http://www.who.int/emergencies/diseases/zika/en>Zika vírus no mundo </a></h4>
        </div>
        <div class="col">
          <a class="link-externo" href=https://www.unicef.org/brazil/pt/activities_32722.html><img class="img-prev" src="dist/img/prev3.png"></a>
        </div>
      </div>
    </div>
    `);
};

function clickChl() {
  $("main").html(`
    <div class="container d-flex justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col">
          <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
          Região das Américas desde 2015.</p>
          <p> No <strong>${chile.country}</strong> somente em 2017 foram registrados:</p>
          <div id="show-data">
          <p class="mb-0"> ${chile.autochthonous_cases_confirmed} casos contraídos no país.</p>
          <p class="mb-0"> ${chile.imported_cases} casos contraídos no exterior.</p>
          <p class="mb-0"> ${chile.deaths} mortes.</p>
          <p class="mb-0"> ${chile.confirmed_congenital} crianças que nasceram com o zika vírus</p>
          </div>
          <h4 class="mt-4"><a class="link-externo" href=http://www.who.int/emergencies/diseases/zika/en>Zika vírus no mundo </a></h4>
        </div>
        <div class="col">
          <a class="link-externo" href=https://www.unicef.org/brazil/pt/activities_32722.html><img class="img-prev" src="dist/img/prev4.png"></a>
        </div>
      </div>
    </div>
    `);
};

function clickBol() {
  $("main").html(`
    <div class="container d-flex justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col">
          <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
          Região das Américas desde 2015.</p>
          <p> No <strong>${bolivia.country}</strong> somente em 2017 foram registrados:</p>
          <div id="show-data">
          <p class="mb-0"> ${bolivia.autochthonous_cases_confirmed} casos contraídos no país.</p>
          <p class="mb-0"> ${bolivia.imported_cases} casos contraídos no exterior.</p>
          <p class="mb-0"> ${bolivia.deaths} mortes.</p>
          <p class="mb-0"> ${bolivia.confirmed_congenital} crianças que nasceram com o zika vírus</p>
          </div>
          <h4 class="mt-4"><a class="link-externo" href=http://www.who.int/emergencies/diseases/zika/en>Zika vírus no mundo </a></h4>
        </div>
        <div class="col">
          <a class="link-externo" href=https://www.unicef.org/brazil/pt/activities_32722.html><img class="img-prev" src="dist/img/prev2.png"></a>
        </div>
      </div>
    </div>
    `);
};
