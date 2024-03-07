import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppRoutingModule
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}
