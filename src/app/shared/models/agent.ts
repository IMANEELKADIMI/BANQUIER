export class Agent {
  id: number;
  nom: string;
  prenom: string;
  cin: string;
  adresse: string;
  tel: string;
  dateNaissance: Date;
  dateInscription:Date;
  email: string;
  agence: {
    id: number;
    nom: string;
    ville: string;
    adresse: string;
    email: string;
    tel:string;
  };
  username: string;
  password: string;
}
