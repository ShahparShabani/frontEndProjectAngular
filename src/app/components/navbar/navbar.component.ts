import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", function () {

      // Listen to scroll event to fix navbar position to top and change its style.
      window.addEventListener('scroll', function () {
          if (window.scrollY > 78) {
              console.log('scroll > 78');
  
              // Remove navbar from carousel and position it to top
              (document.getElementById('navbar_top') as HTMLElement).classList.remove('c-navbar', 'navbar-dark', 'bg-dark');
              (document.getElementById('navbar_top') as HTMLElement).classList.add('c-fixed-top', 'shadow', 'navbar-light', 'bg-light');
  
          } else {
              console.log('scroll < 78');
  
              // Position navbar over the carousel again
              (document.getElementById('navbar_top') as HTMLElement).classList.remove('c-fixed-top', 'shadow', 'navbar-light', 'bg-light');
              (document.getElementById('navbar_top') as HTMLElement).classList.add('c-navbar', 'navbar-dark', 'bg-dark');
  
              // Remove padding top from body
              document.body.style.paddingTop = '0';
          }
      });
  });
  }

}
