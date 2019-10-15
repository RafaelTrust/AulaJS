function apertouTecla(event){
    console.log("apertou uma tecla " + event.keyCode);
}

function soltouTecla(event){
    console.log("soltou uma tecla " + event.keyCode);
    if(event.shiftKey == true){//identificou se esta precionado o shift do teclado
        console.log("com o shift!");
    }
}

function clicouTecla(event){
    console.log("clicou uma tecla " + event.keyCode);
}