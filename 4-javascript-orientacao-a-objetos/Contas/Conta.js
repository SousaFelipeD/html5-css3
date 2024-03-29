import{Cliente} from "../Cliente.js"

//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            return this._saldo;
        }
    }

    sacar(valor){
        throw new Error("O método sacar da Conta é abstrato");
    }

    _sacar(valor, taxa){
        if(this._saldo >= valor){
            const valorSacado = valor * taxa;
            this._saldo -= valorSacado;
            return valor;
        }

        return 0;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}