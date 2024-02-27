import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { CountryModel } from '../models/country.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [NgFor],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit{
  countries: CountryModel[] = [];

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countriesService.getAll().subscribe(res => {
      this.countries = res.map((country:any) =>{
        return {
          id: country.id,
          country: country.countryName,
          capital: country.capital,
          population: country.population
        }
      })
    })
  }

  update():void{
    console.log("UPDATEEEEE")
  }

  delete(): void{
    console.log("DELETEEE");
  }

}
