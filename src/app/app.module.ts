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
import { GalleryComponent } from './home/gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqsComponent } from './home/faqs/faqs.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedEventsComponent,
    GeneralOverviewComponent,
    GalleryComponent,
    ReviewsComponent,
    FaqsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    LightboxModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
