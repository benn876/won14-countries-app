import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFormDialogComponent } from './country-form-dialog.component';

describe('CountryFormDialogComponent', () => {
  let component: CountryFormDialogComponent;
  let fixture: ComponentFixture<CountryFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryFormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
