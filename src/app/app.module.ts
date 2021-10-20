import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AwardsComponent } from './components/awards/awards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarService } from './services/navbar.service';
import { NavbarCarouselComponent } from './components/navbar-carousel/navbar-carousel.component';
import { NavbarCarouselService } from './services/navbar-carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    CustomersComponent,
    AwardsComponent,
    FooterComponent,
    NavbarCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavbarService, NavbarCarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
