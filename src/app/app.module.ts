import { CursoModule } from './curso/curso.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent,
    DataBindingComponent,
    DiretivaNgclassComponent
  ],
  imports: [
    BrowserModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
