import{Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroContas = 0;
    _agencia;
    _cliente;
    _saldo;

    get agencia(){
        return this._agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroContas++;
    }

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