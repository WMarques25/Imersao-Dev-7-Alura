var numeroSecreto = parseInt(Math.floor(Math.random() * 1001)+1);
var chute;
var nChutes = 0;

do {
    chute = prompt('Digite o seu chute (1 - 1000):');
    nChutes++;

    if (chute == numeroSecreto) {
        alert('Acertou!\nNúmero de chutes: ' + nChutes);

    } else if (chute > numeroSecreto) {
        alert('O número secreto é menor que ' + chute + '!\nNúmero de chutes: ' + nChutes);

    } else {
        alert('O número secreto é maior que ' + chute + '!\nNúmero de chutes: ' + nChutes);

    }
} while (chute != numeroSecreto);