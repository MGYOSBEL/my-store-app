import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen/almacen.component';
import { ContactComponent } from './contact/contact.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';

const routes: Routes = [
   
  {path: 'almacen', component: AlmacenComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'edit', component: ItemDetailComponent},
  { path: '',   component: AlmacenComponent },
  {path: '**' , component: AlmacenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
