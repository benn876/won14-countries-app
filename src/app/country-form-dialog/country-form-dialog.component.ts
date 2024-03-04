import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-country-form-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './country-form-dialog.component.html',
  styleUrl: './country-form-dialog.component.css'
})
export class CountryFormDialogComponent {
  countryForm = new FormGroup({
    countryName: new FormControl(''),
    capital: new FormControl(''),
    population: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<CountryFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
  }

  onSubmit():void{
    const newCountry = {
      countryName: this.countryForm.controls.countryName.getRawValue(),
      capital: this.countryForm.controls.capital.getRawValue(),
      population: this.countryForm.controls.population.getRawValue()
    }

    console.log(newCountry);
    this.dialogRef.close({ data:newCountry })
  }

  close():void{
    this.dialogRef.close();
  }
}
