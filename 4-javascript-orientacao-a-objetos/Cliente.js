export class Cliente{
    _nome;
    _cpf;

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this._cpf = cpf;
        this._nome = nome;
    }

}