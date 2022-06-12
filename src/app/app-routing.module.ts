import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { MesaComponent } from './mesa/mesa.component';
import { SignupComponent } from './signup/signup.component';
import { ComandaComponent } from './comanda/comanda.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'agregar-productos', component:AgregarProductosComponent},
  {path: 'agregar-productos/:id', component:AgregarProductosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'mesa/:id', component:MesaComponent},
  {path: 'comanda', component:ComandaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
