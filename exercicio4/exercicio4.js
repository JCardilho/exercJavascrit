var texto = document.getElementById("texto");
var botao = document.getElementById("botao");

botao.addEventListener("click", function(botao){
    alert("conteudo Digitado:  " + texto.value);
});