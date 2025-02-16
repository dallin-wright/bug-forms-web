import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
