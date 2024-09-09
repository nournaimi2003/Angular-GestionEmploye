import { Component } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  constructor(public ps:PersonneService){
  }
  ajouter(f:NgForm){
    let P= f.value['Prenom'];
    let Nom= f.value['Nom'];
    let Metier= f.value['Metier'];
    let CIN= f.value['CIN'];
    let Ville= f.value['Ville'];
    let Salaire= f.value['Salaire'];
    let p:Personne;
    p =new Personne(P,Nom,Metier,CIN,Ville,Salaire);

    this.ps.ajoutPersonne(p).subscribe(
      data =>{alert('ajout personne avec succés');},
      error=> {alert('echec ajout');}
    );
  }

}
