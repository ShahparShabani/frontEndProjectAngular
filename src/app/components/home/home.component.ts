import { Component, OnInit } from '@angular/core';
import { NavbarCarouselService } from 'src/app/services/navbar-carousel.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public navbarService: NavbarService, public navbarCarouselService: NavbarCarouselService) { }

  ngOnInit(): void {
    this.navbarService.hide();
    this.navbarCarouselService.show();
  }

}
