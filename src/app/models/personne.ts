export class Personne {
    // liste des attributs
    public id!: number;
    public Prenom:String;
    public Nom:String;
    public Metier:String;
    public CIN:number;
    public Ville:String;
    public Salaire:number;
  prenom: any;
    // constructeur
    constructor(Prenom:String,Nom:String,Metier:String, CIN:number,Ville:String, Salaire:number){
        this.Prenom=Prenom;
        this.Nom=Nom;
        this.Metier=Metier;
        this.CIN=CIN;
        this.Ville=Ville;
        this.Salaire=Salaire;

    }

}
