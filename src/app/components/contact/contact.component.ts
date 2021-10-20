import { Component, OnInit } from '@angular/core';
import { NavbarCarouselService } from 'src/app/services/navbar-carousel.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public navbarService: NavbarService, public navbarCarouselService: NavbarCarouselService) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.navbarCarouselService.hide();
  }

}
