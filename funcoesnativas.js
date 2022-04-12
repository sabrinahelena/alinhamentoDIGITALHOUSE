// pega um array palavras e retorna com todas as palavras em maiusculo

const palavras = ["sabrina", "maria", "livia", "tiago", "luiza"]


function transformaParaMaiusculo(nomes){
    palavras.push(nomes)
    for(i=0; i<palavras.length; i++){
        console.log(palavras[i].toUpperCase())
    }
}

transformaParaMaiusculo("fernanda")


// VER SE ESTAVA NA AULA OU NÃO
const nomes = []
function estavaPresenteNaAula(nomeDoAluno, nomeDosPresentes){
        if (nomeDosPresentes.indexOf(nomeDoAluno) != -1){ /*o indexOf verifica se tal valor está dentro do
        vetor, se estiver, retorna a posição (0,1,2,3), agora se não estiver, retorna -1. Nesse caso, 
        queríamos que retornasse true caso estivesse, então sendo diferente de nulo (-1), está no array.*/
            return true
        }
        else {
            return false
        }
    }


estavaPresenteNaAula("Joana", ["Matheus", "Leticia", "Caio"])


// GERA SEIS DEZENAS PARA SORTEIO
function gerarDezenas(){
    const vetorMegasena = []
    for(i=0; i<6; i++){ //6x executa o math.random
        numeros = Math.round(Math.random() * 60)
        vetorMegasena.push(numeros)
    }
return vetorMegasena
}
console.log(gerarDezenas())


// MÁXIMOS E MÍNIMOS
function maxmin(a,b,c,d,e){
    const array = []
    maximo = Math.max(a,b,c,d,e)
    array.push(maximo)
    minimo = Math.min(a,b,c,d,e)
    array.push(minimo)

    return array
}

console.log(maxmin(2,3,4,5,6))
