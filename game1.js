const para = document.querySelector( "p");

para.addEventListener( "click",  atualizarNome);

function atualizarNome(){
    var nome = prompt( "insira um novo nome");
    para.textContent = "jogador 1" + nome;
    if (nome == null || nome == ""){
        para.textContent = "jogador 1";
    }
    else{
        document.querySelector("h1").textContent = "bem vindo ao jogo!!"
    }
}
