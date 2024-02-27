import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countries-app';
}
