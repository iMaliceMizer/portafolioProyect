import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarProductosComponent } from '../app/agregar-productos/agregar-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AgregarProductosComponent,
    ProductosComponent,
    LoginComponent,
    SignupComponent,
    ComandaComponent,
    ComponenteNavBarComponent,
    ComponenteFooterComponent,
    AboutusComponent,
    MesasComponent,
    GetImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],

  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
