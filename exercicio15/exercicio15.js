document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o parágrafo original e o botão
    var paragrafoOriginal = document.getElementById('paragrafoOriginal');
    var botaoCopiar = document.getElementById('botaoCopiar');

    // Adicionar evento de clique ao botão
    botaoCopiar.addEventListener('click', function() {
        // Clonar o parágrafo original
        var paragrafoClonado = paragrafoOriginal.cloneNode(true);

        // Remover o ID do parágrafo clonado para evitar IDs duplicados
        paragrafoClonado.removeAttribute('id');

        // Adicionar o parágrafo clonado abaixo do parágrafo original
        paragrafoOriginal.parentNode.insertBefore(paragrafoClonado, paragrafoOriginal.nextSibling);
    });
});
