var tester = 0;
var tester2 = 0;
var tester3 = 0;
function mudarPontos(nom){
    document.getElementById("mudar").innerHTML = document.getElementById("range").value + " " + nom;
}

function mudarTempo(nom){
    var x = document.getElementById("range2").value;
    var y;
    if(x > 180){
            if((x - 180) < 10){
                y = "3:0" + (x - 180);
            }else{
                y = "3:" + (x - 180);
            }
    }else if(x > 120){
        if((x - 120) < 10){
            y = "2:0" + (x - 120);
        }else{
            y = "2:" + (x - 120);
        }
    }else if(x > 60){
        if((x - 60) < 10){
            y = "1:0" + (x - 60);
        }else{
            y = "1:" + (x - 60);
        }
    }else{
        y = x;
    }
    document.getElementById("mudar2").innerHTML = y + " " + nom; 
}

 function pontos(){
    if(tester == 1){
        document.getElementById("tempo").style.display = "none";
        console.log("apagou");
    }
    document.getElementById("ponto").style.display = "contents";
    mudarPontos("pontos");
    tester = 2;
}

function mudarVertical(nom){
    document.getElementById("mudarV").innerHTML = document.getElementById("vertical").value + " " + nom;
}

function mudarHorizontal(nom){
    document.getElementById("mudarH").innerHTML = document.getElementById("horizontal").value + " " + nom;
}

function tempo(){
    if(tester == 2){
        document.getElementById("ponto").style.display = "none";
    }
    document.getElementById("tempo").style.display = "contents";
    mudarTempo("segundos");
    tester = 1;
}

function aparencia(){
    if(tester2 == 2){
        document.getElementById("comandos").style.display = "none";
    }
    document.getElementById("aparencia").style.display = "contents";
    document.getElementById("aparencia2").style.display = "table-row";
    document.getElementById("aparencia3").style.display = "table-row";
    document.getElementById("aparencia4").style.display = "table-row";
    mudarVertical("pixels");
    mudarHorizontal("pixels");
    tester2 = 1;
}

function comandos(){
    if(tester2 == 1){
        document.getElementById("aparencia").style.display = "none";
        document.getElementById("aparencia2").style.display = "none";
        document.getElementById("aparencia3").style.display = "none";
        document.getElementById("aparencia4").style.display = "none";
    }
    document.getElementById("comandos").style.display = "contents";
    tester2 = 2;
}

function alterar(event,id){
    
    if(event == 87){
        document.getElementById(id).value = null;
        document.getElementById(id).setAttribute('readonly',false);
        alert("digite uma tecla para gravar");
        return false;
        tester3 = 1;
    } else {
        document.getElementById(id).setAttribute('readonly',true);
        return true;
        tester3 = 2;
    }

}