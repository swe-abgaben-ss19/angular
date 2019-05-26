import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KundenComponent } from './kunden/kunden.component';
import { KundenprofilComponent } from './kundenprofil/kundenprofil.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, KundenComponent, KundenprofilComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
