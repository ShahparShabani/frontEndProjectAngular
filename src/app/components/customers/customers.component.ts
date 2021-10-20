import { Component, OnInit } from '@angular/core';
import { NavbarCarouselService } from 'src/app/services/navbar-carousel.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(public navbarService: NavbarService, public navbarCarouselService: NavbarCarouselService) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.navbarCarouselService.hide();
  }

}
