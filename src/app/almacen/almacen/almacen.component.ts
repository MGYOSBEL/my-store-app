import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Item} from '../../model/item.model';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  almacen$: Observable<Item[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.almacen$ = this.dataService.getAllItems();
  }

  addItem(){
    this.dataService.addItem(new Item('Silicona roja',5,0,3,2,1));
    console.log('Agregra Itemm fue llamado');
  }



}
