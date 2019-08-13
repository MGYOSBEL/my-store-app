import { getLocaleDateFormat, DatePipe } from '@angular/common';

export class Item{

    nombre: string;
    ID: number;
    descripcion?: string;
    categoria: number; // debe ser de tipo categoria o aca va el ID de la categoria??
    costo: number; // los float tambian son number???
    precio?: number;
    proveedor: number; // debe ser de tipo proveedor o aca va el ID del proveedor??
    almacen: number; // debe ser de tipo almacen o aca va el ID del almacen??
    fechaEntrada?: Date;
    fechaSalida?: Date;

    constructor(Nombre: string, id: number, Categoria: number, Costo: number, Proveedor: number, Almacen: number){
        this.nombre = Nombre;
        this.ID = id;
        this. categoria = Categoria;
        this.costo = Costo;
        this.proveedor = Proveedor;
        this.almacen = Almacen;
        this.fechaEntrada = new Date(Date.now()); // preguntar al papete
    }
}