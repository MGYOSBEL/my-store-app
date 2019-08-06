import { Component, OnInit } from '@angular/core';
import {Item} from '../../model/item.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Item;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
