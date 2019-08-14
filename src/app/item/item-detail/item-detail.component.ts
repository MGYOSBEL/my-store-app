import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../../data.service';
import { Item } from 'src/app/model/item.model';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  createEdit: boolean; //true=create;

  itemDetailForm = new FormGroup({
    name : new FormControl(''),
    id : new FormControl(''),
    descripcion : new FormControl(''),
    categoria : new FormControl(''),
    costo : new FormControl(''),
    proveedor : new FormControl(''),
    almacen : new FormControl(''),
    precio : new FormControl('')
  });


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.createEdit=true; //true=create;
    this.itemDetailForm.controls.id.disable();
  }

  createEditSelector(){
    this.createEdit=!this.createEdit;
    if(this.createEdit)
    this.itemDetailForm.controls.id.disable();
    else
    this.itemDetailForm.controls.id.enable();

  }
  editar(){
    
    this.dataService.setItem(
      this.itemDetailForm.controls.name.value,
      this.itemDetailForm.controls.id.value,
      this.itemDetailForm.controls.categoria.value,
      this.itemDetailForm.controls.costo.value,
      this.itemDetailForm.controls.proveedor.value,
      this.itemDetailForm.controls.almacen.value,
      this.itemDetailForm.controls.precio.value

      
      );
    
      console.log(this.dataService.getItemByID(this.itemDetailForm.controls.id.value)); 
      };

      crear(){
        this.dataService.addItem(new Item(
          this.itemDetailForm.controls.name.value,
          this.dataService.getLength(),
          this.itemDetailForm.controls.categoria.value,
          this.itemDetailForm.controls.costo.value,
          this.itemDetailForm.controls.proveedor.value,
          this.itemDetailForm.controls.almacen.value )
          
    
          
          );
      }
  }


