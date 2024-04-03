import { Component } from '@angular/core';
import {CarFormComponent} from "../../components/car-form/car-form.component";
import {CarsComponent} from "../../components/cars/cars.component";

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [
    CarFormComponent,
    CarsComponent
  ],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.css'
})
export class CarPageComponent {

}
