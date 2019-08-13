import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent} from './item/item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [  
    ItemComponent,
    ItemDetailComponent],
  
  imports: [
    CommonModule,
    ReactiveFormsModule  
  ]
})
export class ItemModule { }
