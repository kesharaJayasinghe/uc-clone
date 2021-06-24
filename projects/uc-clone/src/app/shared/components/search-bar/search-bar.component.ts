import { Component, OnInit } from '@angular/core';
import { LocationList } from '../../models/location-list';

@Component({
  selector: 'keshJay-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  locationList: LocationList[] = [
    { id: 1, location: 'Melbourne' },
    { id: 2, location: 'Sydney' },
    { id: 3, location: 'Brisbane' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
