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
    success: casosZikas,
    error: erro
  })
};

function casosZikas(data){
  const base = data;
  console.log(base);
};
