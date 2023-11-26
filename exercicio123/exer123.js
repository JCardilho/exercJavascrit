const modifica_1paragrafo = document.querySelector(".paragrafo");
const todosParagrafo= document.querySelectorAll(".paragrafo");

modifica_1paragrafo.textContent = "Este paragrafo foi Modificado ";
todosParagrafo.forEach(meuDiv => { 
    meuDiv.textContent = "Todos os paragrafo foram modificados as querySelector"
});

document.getElementById("novoDiv").textContent = "Olá Mundo!";

document.getElementById(id="item3" ).textContent = "Texto do Item 3 Mudado Alterado !";

var botao = document.getElementById("botao");
      botao.addEventListener("click", function(botao){
          alert("Botão clicado!");
      });


// const todosParagrafo = [
//     <p class="paragrafo">Este texto é o original</p>,
//     <p class="paragrafo">Este texto é o original</p>,
//     <p class="paragrafo">Este texto é o original</p>,
//     <p class="paragrafo">Este texto é o original</p>
// ]