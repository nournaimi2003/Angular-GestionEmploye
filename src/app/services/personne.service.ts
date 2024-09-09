import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  gettousPersonnes(id: number) {
    throw new Error('Method not implemented.');
  }
  //variable contenant l'URL de l'API
  apiUrl = "http://[::1]:3000/personnes";

  constructor( public httpclient :HttpClient) { }
  getlespersonnes()
  {
    return this.httpclient.get<Personne[]>(this.apiUrl);
  }
  getPersonne(id:number){
    return this.httpclient.get<Personne>(this.apiUrl+"/"+id);
  }
  supprimerPersonne(id:number){
    return this.httpclient.delete<any>(this.apiUrl+"/"+id);
  }
  modifierPersonne(p:Personne){

    return this.httpclient.put<any>(this.apiUrl+"/"+p.id,p);
  }
  ajoutPersonne(p:Personne){
    return this.httpclient.post<any>(this.apiUrl,p);
  }
}

