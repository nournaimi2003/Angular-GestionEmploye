import { Component } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent {
  lespersonnes: Personne[] | undefined;
  constructor(public ps:PersonneService)
  {
    this.ps.getlespersonnes().subscribe(
      data =>{ this.lespersonnes=data;},
      error=>{alert("Erreur");}
      

    );
  }

}
