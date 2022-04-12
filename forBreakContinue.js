//Imprimir números pares de 0 a 20

numeros = []
for (let n = 0; n <= 20; n++) {
    numeros.push(n)
}


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 1) {
        continue //ou seja, se achar número ímpar, continuar o código sem eles, o continue pula um ciclo
    }
    console.log(numeros[i])
}

//********** PARAR O LOOP QUANDO ACHAR O NÚMERO SORTEADO COM BREAK *************
var cartela = [8, 13, 18, 22, 42, 49];
var numeroSorteado = 42;

for (let i = 0; i < cartela.length; i++) {
    if (cartela[i] == numeroSorteado) {
        console.log("Encontrei o número!")
        break
    }
}

//********** ADICIONAR SOBRENOME MACEDO NO NOME DE CADA PESSOA MENOS PARA PEDRO, QUE É SOUSA *****

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]


for (i = 0; i < familia.length; i++) {
    if (familia[i] == "Pedro") {
        console.log(familia[i], "Sousa")
        continue
    }
    else {
        console.log(familia[i], "Macedo")
    }
}

//**************** ENCONTRAR A CARTA REI, AÍ PARAR O LOOP ***************

var baralho = ["Ás", "Dama", "Rei", "Valete"];

// Seu código aqui

for (i = 0; i < baralho.length; i++) {
    if(baralho[i] == "Rei"){
        console.log("Encontrei o Rei!")
        break
    }
}

