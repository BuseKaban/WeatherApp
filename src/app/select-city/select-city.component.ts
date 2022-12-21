import { Component } from '@angular/core';

interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent {
  selectedCityValue!: string;

  cities: City[] = [
    {value: 'istanbul', viewValue: 'İstanbul'},
    {value: 'izmir', viewValue: 'İzmir'},
    {value: 'ankara', viewValue: 'Ankara'},
  ];

}
