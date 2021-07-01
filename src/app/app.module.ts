import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { WorkCardComponent } from './work-card/work-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    AboutComponent,
    WorkComponent,
    WorkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
