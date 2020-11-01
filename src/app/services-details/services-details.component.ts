import { Component, OnInit } from '@angular/core';
import {ServiceDetails} from '../models/service-details';
import { FormDataService } from '../services/form-data.service';
import {ThemePalette} from '@angular/material/core';




export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = [ 'Service1', 'Service2', 'Service3','Service4','Service5',
  'Service6','Service7','Service8','Service9',
    ]
  
  servicesizeDetails : ServiceDetails;

  constructor(private formDataService : FormDataService) { 
    this.servicesizeDetails = formDataService.servicesizeDetails;
   
  }  

  ngOnInit(): void {
  
  }
 

}
