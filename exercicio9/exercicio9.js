// Seleciona o campo de resultado usando querySelector
var campoResultado = document.querySelector('#resultado');

// Adiciona um evento de clique ao botão
document.getElementById('botaoEnviar').addEventListener('click', function() {
    // Seleciona os campos de texto usando querySelectorAll
    var camposTexto = document.querySelectorAll('#meuFormulario input[type="text"]');

    // Valida se todos os campos de texto estão preenchidos
    var camposPreenchidos = Array.from(camposTexto).every(function(campo) {
        return campo.value.trim() !== '';
    });

    // Exibe o resultado no campo de resultado
    campoResultado.textContent = camposPreenchidos ? 'Formulário válido!' : 'Preencha todos os campos.';
});