import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarProductosComponent } from '../app/agregar-productos/agregar-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { SignupComponent } from '../app/signup/signup.component';
import { ComandaComponent } from '../app/comanda/comanda.component';
import { ComponenteNavBarComponent } from '../app/componente-nav-bar/componente-nav-bar.component';
import { ComponenteFooterComponent } from '../app/componente-footer/componente-footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MesasComponent } from './mesas/mesas.component';
import { GetImagePipe } from './productos/get-image.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


=======
import { SignupComponent } from './signup/signup.component';
import { MesaComponent } from './mesa/mesa.component';
import { ComponenteNavBarComponent } from './componente-nav-bar/componente-nav-bar.component';
import { ComponenteFooterComponent } from './componente-footer/componente-footer.component';
import { HomeComponent } from './home/home.component';
>>>>>>> 3968f672c34bd577a0782e7898fbb3d834c1b5e8
@NgModule({
  declarations: [
    AppComponent,
    AgregarProductosComponent,
    ProductosComponent,
    LoginComponent,
    SignupComponent,
<<<<<<< HEAD
    ComandaComponent,
    ComponenteNavBarComponent,
    ComponenteFooterComponent,
    AboutusComponent,
    MesasComponent,
    GetImagePipe
=======
    MesaComponent,
    ComponenteNavBarComponent,
    ComponenteFooterComponent,
    HomeComponent
>>>>>>> 3968f672c34bd577a0782e7898fbb3d834c1b5e8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
=======
>>>>>>> 3968f672c34bd577a0782e7898fbb3d834c1b5e8
  ],

  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
