document.addEventListener('DOMContentLoaded', function() {
    // Selecionar a lista original e o botão
    var listaOriginal = document.getElementById('listaOriginal');
    var botaoClonar = document.getElementById('botaoClonar');

    // Adicionar evento de clique ao botão
    botaoClonar.addEventListener('click', function() {
        // Clonar a lista original
        var listaClonada = listaOriginal.cloneNode(true);

        // Remover o ID da lista clonada para evitar IDs duplicados
        listaClonada.removeAttribute('id');

        // Adicionar a lista clonada abaixo da lista original
        listaOriginal.parentNode.insertBefore(listaClonada, listaOriginal.nextSibling);
    });
});