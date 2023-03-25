//Funções
var listaDados1 = document.getElementById("lista-1");

function entrar(){
    var nome = prompt("Digite seu nome");

    //Condição
    if(nome === '' || nome ===null){
        alert("Ops, algo deu errado! ❌");
        listaDados1.innerHTML = "Clique no Botão para acessar...";
    }else{
        listaDados1.innerHTML = "Bem vindo " + nome + " ";

        //Método para criar um botão
        let botaoSair =document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        //Chama a função sai
        botaoSair.onclick = sair;
        //Método para aplicar o elemento no HTML
        listaDados1.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até mais!");
    listaDados1.innerHTML = "Você saiu!"
}

var listaDados2 = document.getElementById("lista-2");

function mediaAluno(){
    //Método para converter em número
    var notaUm = parseInt(document.getElementById("nota1").value);
    var notaDois = parseInt(document.getElementById("nota2").value);

    var media = (notaUm + notaDois) / 2;

    if(media >= 7){
        listaDados2.innerHTML = "Aluno aprovado com a média: " + media;
    }else if (media < 7){
        listaDados2.innerHTML = "Aluno reprovado com a média: " + media;
    }
}

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco");
        break;
        case 2:
            alert("Você escolheu 2 = Água Gelada");
        break
        case 3:
            alert("Você escolheu 3 = Sorvete");
        break;
        case 4:
            alert("Você chamou o garçom!");
        break;
        default:
            alert("Escolha uma opção de 1 a 4");
        break;
    }
}


