import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherComponent } from './afficher/afficher.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { ModifierComponent } from './modifier/modifier.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AfficherComponent,
    AjouterComponent,
    SupprimerComponent,
    ModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
