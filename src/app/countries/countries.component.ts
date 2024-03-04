import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { CountryModel } from '../models/country.model';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CountryFormDialogComponent } from '../country-form-dialog/country-form-dialog.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'countryName', 'capital', 'population', 'actions'];
  dataSource: MatTableDataSource<CountryModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private countriesService: CountriesService, public dialog: MatDialog){
    this.countriesService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource<CountryModel>(res.map((country:any) =>{
        return {
          id: country.id,
          countryName: country.countryName,
          capital: country.capital,
          population: country.population
        }
      }));
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CountryFormDialogComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: 'Some data'
    });

    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
      this.countriesService.addCountry(res.data).subscribe();
      location.reload();
    })
  }

  deleteCountry(id: string): void{
    this.countriesService.deleteCountry(id).subscribe(res=>{
      console.log(res);
      location.reload();
    });
  }
}
