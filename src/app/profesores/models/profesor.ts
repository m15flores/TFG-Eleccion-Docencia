import { Deuda } from "./deuda";
import { Usuario } from "./usuario";

export class Profesor{
    id: number;
    usuario: Usuario;
    deuda: Deuda;
    escalafon: number;
    telefono: string;
    despacho: string;
    pda: Number;
    categoria: string;
    departamento: String;

    constructor() {
        this.usuario = new Usuario();
        this.deuda = new Deuda();
    }
};