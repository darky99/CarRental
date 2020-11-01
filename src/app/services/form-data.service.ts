import { Injectable } from '@angular/core';
import { CarSizeDetails } from '../models/car-size-details';
import { ServiceDetails } from '../models/service-details'
 
@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  servicesizeDetails : ServiceDetails;
  carsizeDetails : CarSizeDetails;
   
  constructor() { 
    this.servicesizeDetails = new ServiceDetails();
    this.carsizeDetails = new CarSizeDetails();
  }

  postData(){
    let newCombinedObject = {
      servicesizeDetails : this.servicesizeDetails, 
      carsizeDetails : this.carsizeDetails,
    }

    //Use somthing like http.post etc to send the data to the backend server. 
  }

}
