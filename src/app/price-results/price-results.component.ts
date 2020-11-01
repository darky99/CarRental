import { Component, OnInit } from '@angular/core';
import { FormDataService  } from '../services/form-data.service';

@Component({
  selector: 'app-price-results',
  templateUrl: './price-results.component.html',
  styleUrls: ['./price-results.component.css']
})
export class PriceResultsComponent implements OnInit {

  

  constructor(public formDataService : FormDataService) {
  }
  ngOnInit(): void {
  }

}
