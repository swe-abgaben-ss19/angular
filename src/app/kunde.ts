export class Kunde {
  nachname: string;
  email: string;
  kategorie: number;
  newsletter: boolean;
  geburtsdatum: string;
  umsatz: number;
  homepage: string;
  geschlecht: string;
  familienstand: string;
  interessen: [string];
  adresse: {
    plz: number;
    ort: string;
  };
  user: string;
  username: string;
}
