import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exerc01SelectComponent } from './views/exerc01-select/exerc01-select.component';

import { FormsModule} from '@angular/forms';
import { DesafioComponent } from './views/desafio/desafio.component';
import { Exerc1ngifComponent } from './views/exerc1ngif/exerc1ngif.component';
import { Exerc2ngifComponent } from './views/exerc2ngif/exerc2ngif.component';
import { Exerc3ngifComponent } from './views/exerc3ngif/exerc3ngif.component';
import { Exerc4ngifComponent } from './views/exerc4ngif/exerc4ngif.component';
import { Exerc5ngforComponent } from './views/exerc5ngfor/exerc5ngfor.component';
import { Exerc6ngforComponent } from './views/exerc6ngfor/exerc6ngfor.component';
import { Exerc7ngforComponent } from './views/exerc7ngfor/exerc7ngfor.component';
import { Exerc8ngforComponent } from './views/exerc8ngfor/exerc8ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    Exerc01SelectComponent,
    DesafioComponent,
    Exerc1ngifComponent,
    Exerc2ngifComponent,
    Exerc3ngifComponent,
    Exerc4ngifComponent,
    Exerc5ngforComponent,
    Exerc6ngforComponent,
    Exerc7ngforComponent,
    Exerc8ngforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
