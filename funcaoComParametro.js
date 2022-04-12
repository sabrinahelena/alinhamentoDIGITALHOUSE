//Recebe dois números e retorna o menor

function menorNumero(n1,n2){
    if (n1>n2){
        return n2
    }
    else if(n2>n1){
        return n1
    }
    else if(n2==n1){
        return n1 
    }
}

console.log(menorNumero(2,0.2))

/* Lavanderia:
Cobra 10 reais fixo + 3 reais por quilo de roupa suja */

function calculaValorDevido(pesoDeRoupaSuja){
    return 10 + (3 * pesoDeRoupaSuja)
}

console.log(calculaValorDevido(4))

// Autonomia atual do automóvel, quantos km consegue andar com a quant. de combustível = 1 multplicado pelo outro

function autonomia(quantidadeDeCombustivel, rendimento){
    return quantidadeDeCombustivel * rendimento
}
console.log(autonomia(2,4))