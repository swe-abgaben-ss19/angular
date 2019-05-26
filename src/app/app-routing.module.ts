import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KundenComponent } from './kunden/kunden.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kunden', component: KundenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
