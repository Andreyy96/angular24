import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarFormComponent,
    CarsPageComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
