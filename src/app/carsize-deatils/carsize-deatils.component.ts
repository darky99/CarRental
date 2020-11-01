import { Component, OnInit } from '@angular/core';
import { CarSizeDetails } from '../models/car-size-details';
import { FormDataService} from '../services/form-data.service';
import {ThemePalette} from '@angular/material/core';
 

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({  
  selector: 'app-carsize-deatils',
  templateUrl: './carsize-deatils.component.html',
  styleUrls: ['./carsize-deatils.component.css']
})
export class CarsizeDeatilsComponent implements OnInit {

  carsizeDetails : CarSizeDetails;

  favoriteSeason: string;
  seasons: string[] = [ 'A1=Up-3400mm', 'A2=3401-4000mm', 'A3=4001-4500mm','A4=	4501-4700mm','A5=4701-5000mm',
  'A6=Morethan-5000 mm','B1=<4001mm','B2=>4000mm','Car Wash',
    ]

  


  
  constructor(private formDataService : FormDataService) { 
    this.carsizeDetails = formDataService.carsizeDetails;
  }

  ngOnInit(): void {
  }

  submit(){
    this.formDataService.postData();
  }

}
