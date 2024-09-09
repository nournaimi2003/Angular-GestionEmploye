import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherComponent } from './afficher/afficher.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';





const routes: Routes = [
  {path:'afficher', component:AfficherComponent},
  {path:'ajouter', component:AjouterComponent},
  {path:'modifier/:id', component:ModifierComponent},
  {path:'supprimer/:id', component:SupprimerComponent},
  {path:'', component:AfficherComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
