console.log("Trabalhando com listas");

//array
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba"); //adiciona um novo item

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //remove São Paulo da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //Exibe apenas Rio de Janeiro