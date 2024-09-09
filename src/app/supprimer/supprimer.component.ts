import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent {
  id!: number;
  constructor(public ps:PersonneService, public ar:ActivatedRoute){
     this.ar.params.subscribe(
      data => {this.id =data['id'] ;}
     );
  }
   annuler(){
    alert('opération de supprission annulée');
    
   }
  valider(){
    this.ps.supprimerPersonne(this.id).subscribe(
      data=> {alert ("suppresion avec succés"); this.id =0},
      error=> {alert('suppression erronée');}
    );
  }
}
