import { TestBed } from '@angular/core/testing';

import { NavbarCarouselService } from './navbar-carousel.service';

describe('NavbarCarouselService', () => {
  let service: NavbarCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
