# Objetivo: Criar um SPA
=> API utilizada: Unicef
=> Proposta: informar quantidade de casos de Zika vírus ocorridos em 2017 no país.
=> Estrutura da API:
    Atualmente os dados disponíveis para o público incluem: população, prevalência de mosquitos, Dados do caso Paho Zika e Localização escolar e conectividade. Nesta SPA foram utilizados os dados do caso Paho Zika.

    A API traz os dados por semanas, sendo a primeira referente a segunda quinzena de novembro de 2016 e a última referente a primeira semana de janeiro de 2018.

    Exemplo:
    "cases":{
      "2016-11-17":{
        "bra":{};
        "eua":{};
        "mex":{};
        "cub":{};
        "can":{
            "country": "Canada",
            "autochthonous_cases_suspected": 0,
            "autochthonous_cases_confirmed": 0,
            "imported_cases": 374,
            "incidence_rate": 0,
            "deaths": 0,
            "confirmed_congenital": 0,
            "population_x_1k": 36286,
            "congenital_suspected": 0,
            "congenital_probable": 0,
            "gbs_total": 0,
            "gbs_confirmed": 0
        };  
      };
      "2017-01-05":{...};
      "2017-12-21":{...};
      "2018-01-04":{...};
    }

##Tarefas
1. Tela início
    [x] Header
    [x] Main
        [x] Texto de introdução
        [x] Bandeiras iniciais
        [x] Rotas para as segundas telas
    [x] Footer

2. API
    [x] Puxar país
    [x] População por país
    [x] Casos de Zika por país
    [] Prevalência de mosquitos

3. Segunda tela - Detalhes por país
    [x] Casos de Zika
    [] Prevalência de mosquitos

4. Backlog
    [] Informações sobre saneamento básico dos países
    [] Informações adicionais sobre dengue
    [x] Informações adicionais sobre prevenção

### Avaliação e Requisitos
- O que será considerado
[x].uso de AJAX para reduzir quantidade de atualizações de página
[x].atualização de elementos independentes da pág
[x]. renderização ocorrendo mais do lado do cliente(navegador).

- O que será avaliado
[x]. Criação de SPA com no mínimo 2 telas
- templating
- routing (URLs) [rotas - Usar o Pages para isso]
- DOM & Event Handling (State)

- Requisitos
[x] consumo de pelo menos 1 API;
[] publicação no gh-pages ou usando firebase hosting
