import { Component, OnInit } from '@angular/core';
import { NavbarCarouselService } from 'src/app/services/navbar-carousel.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(public navbarService: NavbarService, public navbarCarouselService: NavbarCarouselService) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.navbarCarouselService.hide();
  }
}
