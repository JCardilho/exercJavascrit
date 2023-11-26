document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o formulário e o botão
    var meuFormulario = document.getElementById('meuFormulario');
    var campoTextoOriginal = document.getElementById('campoTextoOriginal');
    var botaoClonar = document.getElementById('botaoClonar');

    // Adicionar evento de clique ao botão
    botaoClonar.addEventListener('click', function() {
        // Clonar a caixa de texto original
        var campoTextoClonado = campoTextoOriginal.cloneNode();

        // Adicionar o campo de texto clonado ao formulário
        meuFormulario.appendChild(campoTextoClonado);
    });
});