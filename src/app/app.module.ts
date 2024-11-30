import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './home/header/nav-bar/nav-bar.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { FeaturedEventsComponent } from './home/featured-events/featured-events.component';
import { GeneralOverviewComponent } from './home/general-overview/general-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedEventsComponent,
    GeneralOverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
