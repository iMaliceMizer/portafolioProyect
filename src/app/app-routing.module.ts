import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { MesaComponent } from './mesa/mesa.component';

const routes: Routes = [
  {path: 'agregar-productos', component:AgregarProductosComponent},
  {path: 'agregar-productos/:id', component:AgregarProductosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'mesa/:id', component:MesaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
