import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  isServicesOpen = false;
  isMobileOpen = false;
  isMobileServicesOpen = false;

  isScrolled = false; // 🔥 NUEVO

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  toggleMobileServices() {
    this.isMobileServicesOpen = !this.isMobileServicesOpen;
  }

  // 🔥 DETECTAR SCROLL
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // 🔥 CERRAR MENÚ AL HACER CLICK AFUERA
  @HostListener('document:click', ['$event'])
  closeOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest('header')) {
      this.isServicesOpen = false;
    }
  }
}