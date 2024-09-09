import { Component } from '@angular/core';
import { Personne } from '../models/personne';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../services/personne.service';
import{NgForm} from'@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {
  P!: Personne;
  lespersonne!: Personne[];

  constructor(public ps:PersonneService, public ar: ActivatedRoute){
    let id:number=0;
    this.ar.params.subscribe(
      data =>{id = data['id'] ;}
    );
    
    this.ps.getPersonne(id).subscribe(
      data =>{this.P =data;}

    );
    //alert(this.P.Prenom);
    }
    modifier(f:NgForm){
    let Prenom = f.value["Prenom"];
    let Nom = f.value["Nom"];
    let Metier = f.value["Metier"];
    let CIN = f.value["CIN"];
    let Ville = f.value["Ville"];
    let Salaire = f.value["Salaire"];
    if (Prenom !="" && Nom!="" && Metier!=""&& Ville!="" &&CIN>6 && Salaire>0){
      this.P.Prenom=Prenom;
      this.P.Nom=Nom;
      this.P.Metier=Metier;
      this.P.CIN=CIN;
      this.P.Ville=Ville;
      this.P.Salaire=Salaire;
      this.ps.modifierPersonne(this.P).subscribe(
        data=> {alert('modification avec succés')},
        error=> {alert('erreur de modification');}

      );
      
    }
    else
    alert("Saisir tous les champs");
  }
  

}

