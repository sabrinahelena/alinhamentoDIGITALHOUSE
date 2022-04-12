//somar tudo que tá dentro do array lista de lucro

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;
//seu loop aqui

for(i=0; i<listaDeLucro.length; i++){
   console.log(lucroTotal += listaDeLucro[i]) //para somar tudo
}

// ************  IMPRIMIR NOMES DOS CARROS **************
var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"];

// Seu loop aqui:

for(i=0; i<listaDeCarros.length; i++){
    console.log("Nome do Carro: ", listaDeCarros[i])
}

// *********** VERIFICAR SE UMA FRUTA ESPECÍFICA ESTÁ NO ARRAY ****************
var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
var busca = "Cajá";
//seu loop aqui

for(i=0; i<listaDeFrutas.length; i++){
    if(listaDeFrutas[i] == busca){
        console.log("Sim, temos a fruta cajá disponível")
    }
}

// ************** IMPRIMIR TOTAIS DE NÚMEROS NEGATIVOS **************
var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

//seu loop aqui:

for(i=0; i<listaDeGanhos.length; i++){
    if(listaDeGanhos[i]<0){
        totalNegativos++
        console.log(totalNegativos)
    }

}