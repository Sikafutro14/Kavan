import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'; // Import NavbarComponent

@Component({
  selector: 'app-home',
  standalone: true, // Ensure it's a standalone component
  imports: [NavbarComponent], // Import NavbarComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
