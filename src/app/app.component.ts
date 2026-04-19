import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from "./shared/hero/hero.component";
import { NosotrosComponent } from "./shared/nosotros/nosotros.component";
import { ServiciosComponent } from "./shared/servicios/servicios.component";
import { ProcesoComponent } from "./shared/proceso/proceso.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, NosotrosComponent, ServiciosComponent, ProcesoComponent], // 👈 IMPORTANTE
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}