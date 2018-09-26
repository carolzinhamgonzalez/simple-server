$(document).ready(function() {
  // const bandeira = click();
  page('/br', click);
  api();

});

function click() {
  $(".aa").on("click", ()=> {
    $("#teste").html(`<p>Deu certo</p>`)
  });

};
