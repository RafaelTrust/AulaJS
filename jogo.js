function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(ball){
    document.body.removeChild(ball);
}

function iniciar(){
    var op = 1;
    
    setInterval(addBola, 1000);//a cada 1000 é igual a 1 segundo

}

