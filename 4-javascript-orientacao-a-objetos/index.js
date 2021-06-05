import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const contaCorrenteRicardo = new ContaCorrente(new Cliente("Ricardo", 8752897528), 1005);
console.log(`Criando a conta do ${contaCorrenteRicardo.cliente.nome}...`);
console.log(contaCorrenteRicardo);

const contaCorrenteAlice = new ContaCorrente(new Cliente("Alice", 86379438763), 1005);
console.log(`\nCriando a conta da ${contaCorrenteAlice.cliente.nome}...`);
console.log(contaCorrenteAlice);

console.log(`\nContas criadas: ${ContaCorrente.numeroContas}`);

console.log(`\nDeposito de R$100 na conta do ${contaCorrenteRicardo.cliente.nome}`);
contaCorrenteRicardo.depositar(100);
console.log("Saldo: R$" + contaCorrenteRicardo.saldo);

console.log(`\nSaque de R$30 na conta do ${contaCorrenteRicardo.cliente.nome}`);
contaCorrenteRicardo.sacar(30);
console.log("Saldo: R$" + contaCorrenteRicardo.saldo);

console.log(`\nTransferencia de R$20 da conta do ${contaCorrenteRicardo.cliente.nome} para a conta da ${contaCorrenteAlice.cliente.nome}`);
contaCorrenteRicardo.transferir(20, contaCorrenteAlice);
console.log(`Saldo conta ${contaCorrenteRicardo.cliente.nome}: R$${contaCorrenteRicardo.saldo}`);
console.log(`Saldo conta ${contaCorrenteAlice.cliente.nome}: R$${contaCorrenteAlice.saldo}`);


