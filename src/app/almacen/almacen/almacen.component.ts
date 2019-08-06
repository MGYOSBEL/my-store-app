import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Item} from '../../model/item.model';



@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  almacen: Item[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.almacen = this.dataService.getAllItems();
  }

  getAlmacen(id: number):string{
    return this.dataService.getAlmacen(id);
  }


}
