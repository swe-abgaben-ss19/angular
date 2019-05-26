import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kundenprofil',
  templateUrl: './kundenprofil.component.html',
  styleUrls: ['./kundenprofil.component.sass'],
})
export class KundenprofilComponent implements OnInit {
  kundenprofil: any;

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rest
      .getKundenProfil(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        console.log(data);
        this.kundenprofil = data;
      });
  }
}
