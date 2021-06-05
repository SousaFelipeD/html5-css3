class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo;

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            return this._saldo;
        }
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 8752897528;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 86379438763;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.sacar(30);
console.log(contaCorrenteRicardo._saldo);


console.log(cliente1);
console.log(cliente2);