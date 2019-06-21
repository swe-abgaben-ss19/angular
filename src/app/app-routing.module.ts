import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KundenComponent } from './kunden/kunden.component';
import { KundenprofilComponent } from './kundenprofil/kundenprofil.component';
import { NeuComponent } from './neu/neu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kunden', component: KundenComponent },
  { path: 'kundenprofil/:id', component: KundenprofilComponent },
  { path: 'neu', component: NeuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
