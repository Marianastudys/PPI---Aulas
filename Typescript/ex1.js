var nome = 'Mariana';
var matr = 20231144010070;
var outra = 'Mariana Medeiros';
console.log(outra);
var pessoa; //qualquer tipo
var nota = undefined;
nota = 75;
console.log(nota);
function acimaMedia(nota) {
    var estaAcima = false;
    if (nota > 60) {
        estaAcima = true;
    }
    return estaAcima;
}
if (nota > 60) {
    var acimaMedeia = true;
    console.log("Acima da média");
}
else {
    console.log("Abaixo da média");
}
