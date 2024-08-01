import { Component } from '@angular/core';
import { CardProfileComponent } from './card-profile/card-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lab-002';
}
