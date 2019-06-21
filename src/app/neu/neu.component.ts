import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-neu',
  templateUrl: './neu.component.html',
  styleUrls: ['./neu.component.sass'],
})
export class NeuComponent implements OnInit {
  @Input() kundeData = {
    email: '',
    nachname: '',
    kategorie: 0,
    newsletter: true,
    geburtsdatum: '',
    umsatz: {
      betrag: 0,
      waehrung: 'EUR',
    },
    homepage: '',
    geschlecht: '',
    familienstand: '',
    interessen: [''],
    adresse: {
      plz: 0,
      ort: '',
    },
    user: {
      username: '',
      password: '',
    },
  };

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  addProduct() {
    this.rest.addKunde(this.kundeData).subscribe(
      result => {
        console.log(result);
      },
      err => {
        console.log(err);
      }
    );
  }
}
