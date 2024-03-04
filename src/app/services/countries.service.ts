import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url: string = "http://localhost:8080/countries";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  }

  addCountry(request: CountryModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  deleteCountry(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id)
  }
}
