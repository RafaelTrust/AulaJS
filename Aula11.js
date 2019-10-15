function verificar(){
    var n1 = parseInt(document.getElementById("n1").innerHTML);
    var n2 = parseInt(document.getElementById("n2").value);

    if(n1 == n2){
        alert("Você Acertou...Parabens");
    }else{
        alert("Você Errou!");
    }

    resetar();
}

function resetar(){
    document.getElementById("n2").value = "";
    var rd = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = rd;
}