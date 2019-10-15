function addIngrediete(){
    var ing = document.getElementById("ingrediete").value;
    var lista = document.getElementById("lista").innerHTML;

    lista += "<li>" + ing + "</li>";

    document.getElementById("lista").innerHTML = lista;
}