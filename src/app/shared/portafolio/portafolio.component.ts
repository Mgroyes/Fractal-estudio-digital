import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
})
export class PortafolioComponent {

  currentIndex = 0;

  projects = [
    { img: 'assets/imgs/imgPortafolio1.png', title: 'Email marketing' },
    { img: 'assets/imgs/imgPortafolio2.png', title: 'Marketing y redes' },
    { img: 'assets/imgs/imgPortafolio3.png', title: 'Producto' },
    { img: 'assets/imgs/imgPortafolio3.png', title: 'Producto' },
    { img: 'assets/imgs/imgPortafolio3.png', title: 'Producto' },
  ];

  visibleCards = 3;

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