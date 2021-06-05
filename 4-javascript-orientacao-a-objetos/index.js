import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 8752897528;
console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 86379438763;
console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
console.log(contaCorrenteRicardo);
console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.sacar(30);
console.log(contaCorrenteRicardo._saldo);


