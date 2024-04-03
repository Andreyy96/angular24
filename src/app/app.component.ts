import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarPageComponent} from "./pages/car-page/car-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular24';
}
