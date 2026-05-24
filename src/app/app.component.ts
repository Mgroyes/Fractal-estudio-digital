import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from "./shared/hero/hero.component";
import { NosotrosComponent } from "./shared/nosotros/nosotros.component";
import { ServiciosComponent } from "./shared/servicios/servicios.component";
import { ProcesoComponent } from "./shared/proceso/proceso.component";
import { ContactComponent } from "./shared/contact/contact.component";
import { PortafolioComponent } from './shared/portafolio/portafolio.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { BlogComponent } from "./shared/blog/blog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, NosotrosComponent, ServiciosComponent, ProcesoComponent, ContactComponent, PortafolioComponent, FooterComponent, BlogComponent], // 👈 IMPORTANTE
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}