import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Keep it standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule] // Import RouterModule so router-outlet works
})
export class AppComponent {
  title = 'kavan-frontend';
}
