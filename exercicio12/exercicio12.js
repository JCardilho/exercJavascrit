var imagens = document.querySelectorAll('img');

// Adicionar evento de clique a cada imagem
imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        // Obter o nome do arquivo da imagem
        var nomeArquivo = imagem.src.split('/').pop();

        // Exibir um alerta com o nome do arquivo
        alert('Nome do arquivo: ' + nomeArquivo);
    });
});