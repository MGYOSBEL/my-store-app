import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlmacenComponent } from './almacen/almacen/almacen.component';
import {DataService} from './data.service';
import { ContactComponent } from './contact/contact.component';
import {ItemModule} from './item/item.module';

@NgModule({
  declarations: [
    AppComponent,
    
    AlmacenComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
