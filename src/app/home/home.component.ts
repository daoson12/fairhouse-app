import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city = '';
  searchResults: Location[] = [];
  housingList: Location[] = [
    {
      id: 1,
      name: 'Location One',
      description: 'Safe Place',
      city: 'Chicago'
    },
    {
      id: 2,
      name: 'Location Two',
      description: 'Safe Place',
      city: 'Chicago'
    },
    {
      id: 3,
      name: 'Location Three',
      description: 'Safe Place',
      city: 'Chicago'
    }
  ];


  constructor() { }

  ngOnInit(): void {
    this.searchHousing
  }

  searchHousing() {
    if (this.city !== ''){
      this.searchResults = this.housingList
      .filter((location): boolean =>
        location.city.toLowerCase() ===
      this.city.toLowerCase()); 
    }
  }
}
