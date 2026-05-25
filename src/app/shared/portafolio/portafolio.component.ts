import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
})
export class PortafolioComponent {

  currentIndex = 0;

  projects = [
    { img: '/assets/imgs/macad-feed.png', title: 'Email marketing' },
    { img: 'assets/imgs/wiframe-web.png', title: 'Marketing y redes' },
    { img: 'assets/imgs/triidy-feed.png', title: 'Producto' },
    { img: 'assets/imgs/maku-zambo.png', title: 'Producto' },
    { img: 'assets/imgs/drink-point.png', title: 'Producto' },
  ];

  visibleCards = 3;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateVisibleCards();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.updateVisibleCards();
    }
  }

  updateVisibleCards() {
    const width = window.innerWidth;

    if (width < 640) {
      this.visibleCards = 1;
    } else if (width < 1024) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 3;
    }

    if (this.currentIndex > this.projects.length - this.visibleCards) {
      this.currentIndex = this.projects.length - this.visibleCards;
    }
  }

  getSlideWidth(): number {
    return 100 / this.visibleCards;
  }

  next() {
    if (this.currentIndex < this.projects.length - this.visibleCards) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}