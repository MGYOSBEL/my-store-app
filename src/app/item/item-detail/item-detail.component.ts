import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

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
  }

  onSubmit(){
    
    this.dataService.setItem(
      this.itemDetailForm.controls.name.value,
      this.itemDetailForm.controls.id.value,
      this.itemDetailForm.controls.categoria.value,
      this.itemDetailForm.controls.costo.value,
      this.itemDetailForm.controls.proveedor.value,
      this.itemDetailForm.controls.almacen.value,
      this.itemDetailForm.controls.precio.value

      );
  }

}
