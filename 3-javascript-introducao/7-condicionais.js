console.log("Trabalhando com condicionais");

//array
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

/* if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //remove São Paulo da lista
}
else if(estaAcompanhada){
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1,1); //remove São Paulo da lista
}
else{
    console.log("Comprador não é maior de idade e não posso vender");
} */

if(idadeComprador >= 18 || estaAcompanhada == true)
{
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //remove São Paulo da lista
}
else{
    console.log("Comprador não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem");
}
else{
    console.log("Você não pode embarcar");
}
    
console.log(listaDeDestinos);