import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen/almacen.component';

const routes: Routes = [
   
  {path: 'almacen', component: AlmacenComponent},
  { path: '',   component: AlmacenComponent },
  {path: '**' , component: AlmacenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
