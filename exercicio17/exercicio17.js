document.addEventListener('DOMContentLoaded', function() {
    // Selecionar a tabela original e o botão
    var tabelaOriginal = document.getElementById('tabelaOriginal');
    var botaoClonar1 = document.getElementById('botaoClonar1');
    var botaoClonar2 = document.getElementById('botaoClonar2');
   

    // Adicionar evento de clique ao botão
    botaoClonar1.addEventListener('click', function() {
        // Clonar a primeira linha da tabela original
        var primeiraLinhaOriginal = tabelaOriginal.rows[0];
        var linhaClonada = primeiraLinhaOriginal.cloneNode(true);


        // Adicionar a linha clonada à tabela
        tabelaOriginal.appendChild(linhaClonada);
    });
      // Adicionar evento de clique ao botão
      botaoClonar2.addEventListener('click', function() {
        // Clonar a última linha da tabela original
        var ultimaLinhaOriginal = tabelaOriginal.rows[1];
        var linhaClonada = ultimaLinhaOriginal.cloneNode(true);

        // Adicionar a linha clonada à tabela
        tabelaOriginal.appendChild(linhaClonada);
    });

});