// Selecionar todos os itens de lista usando querySelectorAll
var itensLista = document.querySelectorAll('ul li');

// Adicionar a classe "item-lista" a cada item de lista
itensLista.forEach(function(item) {
    item.classList.add('item-lista');
});
