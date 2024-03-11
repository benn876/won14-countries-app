import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { CountryModel } from '../models/country.model';

@Component({
  selector: 'app-country-form-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './country-form-dialog.component.html',
  styleUrl: './country-form-dialog.component.css'
})
export class CountryFormDialogComponent implements OnInit{
  countryForm = new FormGroup({
    countryName: new FormControl('', Validators.required),
    capital: new FormControl('', Validators.required),
    population: new FormControl('', Validators.required)
  });

  currentCountry: CountryModel;
  constructor(
    public dialogRef: MatDialogRef<CountryFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentCountry = data;
  }

  ngOnInit():void{
    if(this.currentCountry){
      this.countryForm.controls.countryName.setValue(this.currentCountry.countryName);
      this.countryForm.controls.capital.setValue(this.currentCountry.capital);
      this.countryForm.controls.population.setValue(this.currentCountry.population.toString());
    }
  }

  onSubmit(){
    const newCountry = {
      countryName: this.countryForm.controls.countryName.getRawValue(),
      capital: this.countryForm.controls.capital.getRawValue(),
      population: this.countryForm.controls.population.getRawValue()
    }

    console.log(newCountry);
    if(this.currentCountry){
      this.dialogRef.close({
        event:"update",
        data:newCountry 
       })
    } else {
      this.dialogRef.close({
        event:"add",
        data:newCountry 
       })
    }
  }

  close():void{
    console.log("Cancel")
    this.dialogRef.close({
      event:"cancel"
     });
  }
}
