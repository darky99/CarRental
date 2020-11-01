import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsizeDeatilsComponent } from '../app/carsize-deatils/carsize-deatils.component';
import { ServicesDetailsComponent } from '../app/services-details/services-details.component'
import { HomeComponent } from './home/home.component';
import { PriceResultsComponent } from './price-results/price-results.component';

const routes: Routes = [
  { path : '',   component : HomeComponent }, 
  { path : 'Services',   component : ServicesDetailsComponent }, 
  { path : 'Carsize',   component : CarsizeDeatilsComponent }, 
  { path : 'Price',   component : PriceResultsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
