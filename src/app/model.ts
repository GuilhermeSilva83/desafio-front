export class OperationResult<TData> {
    data?: TData;
    success: boolean
    message: string

    constructor() {

    }
}

export class Tipo implements IEntity<any> {
    constructor() {
    }
    id: any;
    nome: string;
}

export class Cidade extends Tipo {
    estadoId: 0;
    estado: Tipo;
    constructor() {
        super();
    }
}

export interface IEntity<TId> {
    id: any;
}

export class Leilao implements IEntity<string> {
    id: string;
    nome: string;
    valorInicial: number;
    usado: boolean;
    dataAbertura: Date;
    dataFinalizacao: Date;

    usuarioResponsavelId: string;
    usuarioResponsavel: Usuario;

    constructor() {
    }
}

export class Usuario {
    id: number;
    nome: string;
    constructor() {

    }
}

export class Login {
    constructor() {

    }

    usuario: string;
    senha: string;

}

