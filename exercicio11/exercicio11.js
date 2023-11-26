// Selecionar todos os parágrafos com a classe "destaque" usando querySelectorAll
var paragrafosDestaque = document.querySelectorAll('p.destaque');

// Alterar o texto de cada parágrafo de destaque
paragrafosDestaque.forEach(function(paragrafo) {
    paragrafo.textContent = 'Este é um parágrafo de destaque!';
});