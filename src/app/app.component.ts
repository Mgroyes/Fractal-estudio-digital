import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from "./shared/hero/hero.component";
import { NosotrosComponent } from "./shared/nosotros/nosotros.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, NosotrosComponent], // 👈 IMPORTANTE
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}