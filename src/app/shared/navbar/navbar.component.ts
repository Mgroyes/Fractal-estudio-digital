import { Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  isServicesOpen = false;
  isMobileOpen = false;
  isMobileServicesOpen = false;

  isScrolled = false;

  //  TOGGLES
  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  toggleMobileServices() {
    this.isMobileServicesOpen = !this.isMobileServicesOpen;
  }

  //  SCROLL NAVBAR
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  //  CERRAR MENÚ AL HACER CLICK AFUERA
  @HostListener('document:click', ['$event'])
  closeOutside(event: Event) {

    const target = event.target as HTMLElement;

    if (!target.closest('header')) {
      this.isServicesOpen = false;
    }
  }

  //  SCROLL A SECCIONES
  scrollTo(section: string) {

    const element = document.getElementById(section);

    // 🔥 cerrar overlays
    this.isMobileOpen = false;
    this.isMobileServicesOpen = false;
    this.isServicesOpen = false;

    if (element) {

      const yOffset = -90;

      const y =
        element.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      setTimeout(() => {

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });

      }, 120);
    }
  }
}