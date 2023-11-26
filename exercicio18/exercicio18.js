document.addEventListener('DOMContentLoaded', function() {
    // Selecionar a imagem original e o botão
    var imagemOriginal = document.getElementById('imagemOriginal');
    var botaoClonar = document.getElementById('botaoClonar');

    // Adicionar evento de clique ao botão
    botaoClonar.addEventListener('click', function() {
        // Clonar a imagem original
        var imagemClonada = imagemOriginal.cloneNode(true);

        // Adicionar a imagem clonada abaixo da imagem original
        imagemOriginal.parentNode.insertBefore(imagemClonada, imagemOriginal.nextSibling);
    });
});