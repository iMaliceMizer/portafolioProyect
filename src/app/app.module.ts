import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteNavBarComponent } from './componente-nav-bar/componente-nav-bar.component';
import { ComponenteFooterComponent } from './componente-footer/componente-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteNavBarComponent,
    ComponenteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
