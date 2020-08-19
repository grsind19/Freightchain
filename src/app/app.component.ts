import { Component, OnInit } from '@angular/core';
import {CountriesService} from './countries.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'freight';
  p: number = 1;
  countries: any = [];
  country: any = {
    name: '',
    code: ''
  };
  constructor(private countryService: CountriesService){

  }
  ngOnInit(){
    this.countryService.getCountries().subscribe(data => {
      if (data && data["country_list"]){
        this.countries = data["country_list"] ;
      }
    });
  }
  addCountry(country){
    this.countryService.addCountry(this.country).subscribe(data => {
      if (data){
        this.countries.push(country);
        this.country = {code:'', name:''}
      }
    });
  }
  selectCountry(country){
    this.country = country;
  }
  editCountry(){
    this.countryService.editCountry(this.country).subscribe(data => {
      if (data){
        console.log("success")
      }
    });
  }
  deleteCountry(country){
    this.countryService.deleteCountry(country).subscribe(data => {
      if (data){
        this.countries = _.filter(this.countries,(data)=>{
          return data.code !== country.code;
        });
      }
    });
  }
}
