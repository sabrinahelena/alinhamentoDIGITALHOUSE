// Listar produtos
function listarProdutos() {
    var lista = ['Leite', 'tomate', 'Biscoito', 'Tapioca']
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

console.log(listarProdutos())


// Função que imprime nome e sobrenome ******************
var nome = "Sabrina"
var sobrenome = "Ferreira"

function cartaoDeVisitas(){
    console.log(nome + " " + sobrenome)
}

cartaoDeVisitas()


// Tabuada do sete ****************************************

function tabuadaDoSete(){
    for(i = 1; i < 11; i++){
        console.log("7 x" + " " + i + " " + "=" + " " + 7*i)
    }
}

tabuadaDoSete()