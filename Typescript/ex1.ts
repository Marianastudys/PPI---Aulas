let nome ='Mariana'
let matr = 20231144010070

let outra: string = 'Mariana Medeiros'
console.log(outra)
let pessoa: any //qualquer tipo

let nota:number | undefined = undefined

nota = 75
console.log(nota)

function acimaMedia(nota: number): boolean {
    let estaAcima = false
    if (nota > 60) {
        estaAcima = true
    }
    return estaAcima
}

if (nota > 60) {
    var acimadMedia = true
    console.log("Acima da média")
} else {
    console.log("Abaixo da média")
}
