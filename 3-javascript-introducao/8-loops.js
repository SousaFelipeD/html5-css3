console.log("\nTrabalhando com condicionais");

//array
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador++;
}

console.log("Destino existe: " + destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}
else{
    console.log("Desculpe tivemos um erro!");
}

//for(let cont = 0; cont < 3; cont++){
//
//}
