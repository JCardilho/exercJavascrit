// Selecionar todas as caixas de seleção
var caixasSelecao = document.querySelectorAll('input[type="checkbox"]');

// Adicionar evento de clique ao botão "Selecionar Todos"
var botaoSelecionarTodos = document.getElementById('selecionarTodos');
botaoSelecionarTodos.addEventListener('click', function() {
    // Iterar sobre todas as caixas de seleção
    caixasSelecao.forEach(function(caixaOriginal) {
        // Clonar a caixa de seleção original e adicionar o mesmo evento de clique
        var caixaClonada = caixaOriginal.cloneNode(true);
        caixaClonada.removeAttribute('id'); // Remover o atributo id para evitar IDs duplicados
        caixaClonada.checked = !caixaOriginal.checked; // Inverter o estado

        // Adicionar o mesmo evento de clique à caixa de seleção clonada
        caixaClonada.addEventListener('click', function() {
            caixaOriginal.checked = caixaClonada.checked;
        });

        // Adicionar a caixa de seleção clonada após a caixa original
        caixaOriginal.parentNode.insertBefore(caixaClonada, caixaOriginal.nextSibling);
    });
});