$(document).ready(function() {
  page('/', index);
  page('/bra', clickBra);
  page('/chl', clickChl);
  page('/bol', clickBol);
  page();
  api();
});

function index(){
  $("main").html(firstPage());
};

function firstPage() {
    return `
    <div class="container d-flex justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col" id="introduction">
          <h2>Zika vírus no mundo</h2>
          <p> O aumento da disseminação do Zika vírus foi acompanhado por um aumento nos casos de microcefalia e
            síndrome de Guillain-Barré. Identificada pela primeira vez em Uganda em 1947 em macacos, o Zika foi
            posteriormente identificado em humanos em 1952. O primeiro grande surto de doença causado pelo Zika
            foi relatado na Ilha de Yap em 2007.
          </p>
          <p> Atualmente, vários países estão sofrendo de surtos do vírus Zika. Diante disso organizações de saúde de todo o mundo trabalham para conter o surto atual e na
            prevenção no aumento de casos.
          </p>
        </div>
        <div class="col" id="flags">
          <h2 class="mb-1">Veja como cada país foi afetado</h2>
          <div class="mt-3">
            <a href="/bra"><img class="img-country" src="dist/img/bra.png"></a>
            <a href="/chl"><img class="img-country" src="dist/img/chl.png"></a>
            <a href="/bol"><img class="img-country" src="dist/img/bol.jpg"></a>
          </div>
          <h3 class="mt-5"><a class="link-externo" href=https://www.unicef.org/brazil/pt/activities_32722.html>Saiba como se previnir</a></h3>
        </div>
      </div>
    </div>`
};
