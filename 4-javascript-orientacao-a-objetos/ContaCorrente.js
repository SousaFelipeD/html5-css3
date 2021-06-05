export class ContaCorrente {
    agencia;
    cliente;

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}