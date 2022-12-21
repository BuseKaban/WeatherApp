import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import data from '../../assets/cities-list.json';

interface City {
  name: string;
  population: number,
}

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent implements OnInit{

  selectedCityValue!: string;

  cities: City[] = data;

  @Output() selectedCityChanged = new EventEmitter<string>();

  ngOnInit(): void {

  }

  handleSelectedCityChange(){
    this.selectedCityChanged.emit(this.selectedCityValue);
  }


}
