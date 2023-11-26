// Selecionar o primeiro link usando querySelector
var primeiroLink = document.querySelector('a');

// Adicionar um evento de clique ao primeiro link
primeiroLink.addEventListener('click', function(event) {
  // Impedir o comportamento padrão do link (navegar para outra página)
  event.preventDefault();

  // Exibir um alerta com o URL do link
  alert('URL do link: ' + primeiroLink.href);
});