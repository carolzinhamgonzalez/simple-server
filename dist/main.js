$(document).ready(function() {
  // const bandeira = click();
  // flags()
  page('/', index);
  page('/bra', clickBra);
  page('/chl', clickChl);
  page('/per', clickPer);
  page('/bol', clickBol);
  page();
  api();

});

function index(){
  $("main").html(firstPage());
  // flags();
};

// function flags() {
//   $('<div id="flags"></div>').appendTo('main').html();
//   $(`<a href="/bra"> <img class="img-country" src="dist/img/br.jpg"> </a>`).appendTo('#flags').html();
//   $(`<a href="/chl"> <img class="img-country" src="dist/img/chl.png"> </a>`).appendTo('#flags').html();
// };


function firstPage() {
    return `
    <div id="introduction">
      <h2>Zika vírus no mundo</h2>
      <p> O aumento da disseminação do vírus Zika foi acompanhado por um aumento nos casos de microcefalia e
        síndrome de Guillain-Barré. Identificada pela primeira vez em Uganda em 1947 em macacos, o Zika foi
        posteriormente identificado em humanos em 1952. O primeiro grande surto de doença causado pela infecção
        pelo Zika foi relatado na Ilha de Yap em 2007. Atualmente, vários países estão sofrendo de surtos do vírus
        Zika.
      </p>
      <p> Diante disso organizações de saúde de todo o mundo trabalham para conter o surto atual e na prevenção
      no aumento de casos.</p>
    </div>
    <div id="flags">
      <a href="/bra"> <img class="img-country" src="dist/img/br.jpg"></a>
    </div>`
};
