import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public token: string;
  public baseUrl: string;
  public httpOptions: any;
  constructor(private http: HttpClient) {
    this.token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvcGVyYXRvciIsImV4cCI6MTU5OTYyNjU3NiwiaWF0IjoxNTk3MDM0NTc2fQ.4LegVuEyi1bEXwkcWxcluTsWoirtw6EOJq9oqSBZEEN-rvkzVYRS5hbWgvhhzrEeMy7LylJApvnZvGe1HmnOAQ';
    this.baseUrl = 'https:/freightchain.world';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.token
      })
    };
  }

  getCountries(){
    return this.http.get(this.baseUrl + '/md/country/list', this.httpOptions);
  }
  getCountryByCode(country){
    return this.http.get(this.baseUrl + `/md/country/${country.code}`, this.httpOptions);
  }
  addCountry(country){
    return this.http.post(this.baseUrl + '/md/country/add', country, this.httpOptions);
  }
  editCountry(country){
    return this.http.put(this.baseUrl + `/md/country/edit/${country.code}`, country, this.httpOptions);
  }
  deleteCountry(country){
    return this.http.delete(this.baseUrl + `/md/country/delete/${country.code}`, this.httpOptions);
  }


}
