import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kunden',
  templateUrl: './kunden.component.html',
  styleUrls: ['./kunden.component.sass'],
})
export class KundenComponent implements OnInit {
  kunden: any = [];

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getKunden();
  }

  getKunden() {
    this.kunden = [];
    this.rest.getKunden().subscribe((data: {}) => {
      console.log(data);
      this.kunden = data;
    });
  }
}
