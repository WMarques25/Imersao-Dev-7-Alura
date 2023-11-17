var listaJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function adicionarJogador() {
    var nomeJogador = document.getElementById("nomeJogador").value;
    var jogadorJaCadastrado = false;

    if(nomeJogador == ""){
        alert("Digite um nome para o jogador");
        return;
    }

    listaJogadores.forEach(element => {
        if(element.nome == nomeJogador){
            document.getElementById("nomeJogador").value = "";
            alert("Jogador já cadastrado");
            jogadorJaCadastrado = true;
        }
    });

    if(jogadorJaCadastrado){
        return;
    }
    document.getElementById("nomeJogador").value = "";
    var jogador = {
        nome: nomeJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    };
    listaJogadores.push(jogador);
    atualizarTela();

}
function atualizarTela() {
    ordenarPorPontos();
    elementoTabela.innerHTML = "";
    for(var i = 0; i < listaJogadores.length; i++){
        elementoTabela.innerHTML = elementoTabela.innerHTML + `
        <tr>
        <td>${listaJogadores[i].nome}</td>
        <td>${listaJogadores[i].vitorias}</td>
        <td>${listaJogadores[i].empates}</td>
        <td>${listaJogadores[i].derrotas}</td>
        <td>${listaJogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
        `;
    };    
}
function adicionarVitoria(i){
    var jogador = listaJogadores[i];
    jogador.vitorias++;
    jogador.pontos += 3;
    atualizarTela();
    
}
function adicionarEmpate(i){
    var jogador = listaJogadores[i];
    jogador.empates++;
    jogador.pontos++;
    atualizarTela();

}
function adicionarDerrota(i){
    var jogador = listaJogadores[i];
    jogador.derrotas++;
    atualizarTela();

}
function limparTabela(){
    listaJogadores = [];
    atualizarTela();
}
function zerarPontos(){
    for(var i = 0; i < listaJogadores.length; i++){
        listaJogadores[i].vitorias = 0;
        listaJogadores[i].empates = 0;
        listaJogadores[i].derrotas = 0;
        listaJogadores[i].pontos = 0;
    }
    atualizarTela();
}
function ordenarPorPontos(){
    listaJogadores.sort(function(a, b){
        return b.pontos - a.pontos;
    });
}