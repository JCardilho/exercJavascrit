// Selecionar todas as células de cabeçalho usando querySelectorAll
var celulasCabecalho = document.querySelectorAll('table th');

// Adicionar a classe "cabecalho" a cada célula de cabeçalho
celulasCabecalho.forEach(function(celula) {
    celula.classList.add('cabecalho');
});
