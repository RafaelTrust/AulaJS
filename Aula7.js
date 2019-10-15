var nome;

function acao(){
    var area = document.getElementById("area1");
    var texto = prompt("Qual o seu nome?");

    area.innerHTML = texto;
    nome = texto;
}

function acao1(){
    var area = document.getElementById("area1");
    var sobrenome = prompt("Qual o seu sobrenome?");

    area.innerHTML = nome + " " + sobrenome;
}