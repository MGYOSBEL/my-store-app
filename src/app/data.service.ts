import { Injectable } from '@angular/core';
import {Item} from './model/item.model';
import {ITEMS} from './model/mock-items';
import {Almacen} from './model/almacen.model';
import {ALMACENES} from './model/mock-almacenes';
import {Categoria} from './model/categoria.model';
import {CATEGORIAS} from './model/mock-categorias';
import {Proveedor} from './model/proveedor.model';
import {PROVEEDORES} from './model/mock-proveedores';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getItemByID(id: number) :Item {
    for(var i=0; i<ITEMS.length; i++)
    {
      if (ITEMS[i].ID==id)
      return ITEMS[i];
    }
  }

  getAllItems() : Item[]{
    return ITEMS;
  }

  getAlmacenItems(id: number):Item[] {
    var almacen: Item[];
    almacen = ITEMS.filter((item)=>{item.ID==id});
    return almacen;
  }

  getCategoria(id: number):string {
   return CATEGORIAS[id];
  }

  getAlmacen(id: number):string {
    return ALMACENES[id];
   }

   getProveedor(id: number):string {
    return PROVEEDORES[id];
   }

  
}
