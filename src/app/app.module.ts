import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoAreWe1Component } from './who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './who-are-we2/who-are-we2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoAreWe1Component,
    WhoAreWe2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
