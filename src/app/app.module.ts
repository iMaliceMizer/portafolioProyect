import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MesaComponent } from './mesa/mesa.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarProductosComponent,
    ProductosComponent,
    LoginComponent,
    SignupComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
