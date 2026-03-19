import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent], // 👈 IMPORTANTE
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}