var listaFilmes = [];
function adicionarFilme() {
    var filme = document.getElementById("filme").value;
    var trailer = document.getElementById("trailer").value;

    if((filme.includes(".jpg") || filme.includes(".png") || 
            filme.includes(".jpeg") && trailer.includes("youtube.com/watch?v="))){
        listaFilmes.push([filme, trailer]);
        limpar();   

        var elementoListaFilmes = document.getElementById("listaFilmes");
        elementoListaFilmes.innerHTML = '';
        
        listaFilmes.forEach(element => {
            elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href="' + element[1] + '"><img src=' + element[0] + '></a>';
            
        });
        
    } else {
        limpar();    
        alert("Insira um link de imagem e um de Youtube válido!");
    } 
}

function limpar(){
    document.getElementById("filme").value = "";
    document.getElementById("trailer").value = ""; 
}