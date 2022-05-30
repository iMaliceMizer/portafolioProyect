import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: 'agregar-productos', component:AgregarProductosComponent},
  {path: 'agregar-productos/:id', component:AgregarProductosComponent},
  {path: 'productos', component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
