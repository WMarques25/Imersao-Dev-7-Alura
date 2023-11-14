var nome = "Well"
var valorEmDolar = 30;
var cotacaoDolar = 4.9408;
var cotacaoBitCoin = 180009.01;
var distSiriusA = 8.611;
var anosLuzMetro = 9.461;
var siriusAMetros = (distSiriusA * anosLuzMetro).toFixed(6);
var valorEmReal = (valorEmDolar * cotacaoDolar).toFixed(2);
var valorEmBitCoin = (valorEmReal/cotacaoBitCoin).toFixed(5);
alert("Bom dia " + nome + "!\nU$ 30,00" + 
"\nValor em Real: R$ " + valorEmReal + 
"\nValor em BitCoin: BTC " + valorEmBitCoin + 
"\nE a distância para a estrela Sirius A é: " 
+ siriusAMetros + "x10¹⁵m");