function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra);
 }
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
  
 // Seu código vem aqui embaixo.
for (i = 0; i < palavras.length; i++ ){
    if(comecaComMaiuscula(palavras[i])){
        console.log("Começa com maiúscula")
    }
    else {
        console.log("Não começa com maiúscula")
    }
} 


