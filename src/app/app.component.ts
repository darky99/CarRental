import { Component } from '@angular/core';
import { FormDataService  } from '../app/services/form-data.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental2';
  constructor(public formDataService : FormDataService) {
  }
}  
   