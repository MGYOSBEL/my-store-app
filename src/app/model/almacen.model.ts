import {Item} from './item.model';

export class Almacen{

    nombre: string;
    ID:number;
    descripcion: string;
    items: Item[];

    constructor(Nombre: string, id: number){
        this.nombre = Nombre;
        this.ID = id;
    }
}