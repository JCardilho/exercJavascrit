// Obtém todos os parágrafos
var paragrafos = document.querySelectorAll('p');

// Itera sobre os parágrafos
for (var i = 0; i < paragrafos.length; i++) {
    // Verifica se o texto do parágrafo contém a palavra "JavaScript"
    if (paragrafos[i].textContent.includes('JavaScript')) {
        // Altera o texto do parágrafo e interrompe o loop
        paragrafos[i].textContent = "Aprendendo JavaScript!";
        break;
    }
}
