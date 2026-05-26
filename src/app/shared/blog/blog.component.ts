import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {

  readonly features = [
    {
      icon: 'bi bi-rocket-takeoff',
      title: 'Marketing',
      description:
        'Creamos estrategias digitales enfocadas en crecimiento, posicionamiento y conversión para marcas modernas.'
    },
    {
      icon: 'bi bi-gear',
      title: 'Automatización',
      description:
        'Integramos herramientas y procesos inteligentes para optimizar tareas y mejorar resultados.'
    },
    {
      icon: 'bi bi-credit-card',
      title: 'Finanzas',
      description:
        'Desarrollamos soluciones digitales seguras para negocios que requieren organización y control.'
    },
    {
      icon: 'bi bi-palette',
      title: 'Diseño UX/UI',
      description:
        'Diseñamos experiencias visuales modernas, intuitivas y enfocadas en conectar con usuarios.'
    }
  ];

}