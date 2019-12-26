import { HeroSearchComponent } from './../hero-search/hero-search.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AppRoutingModule,],
      declarations: [DashboardComponent, HeroesComponent, HeroSearchComponent, HeroDetailComponent]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
  });
  it('should convert hero name to Title Case', () => {
    // get the name's input and display elements from the DOM
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    const nameDisplay: HTMLElement = hostElement.querySelector('span');

    // simulate user entering a new name into the input box
    nameInput.value = 'quick BROWN  fOx';

    // dispatch a DOM event so that Angular learns of input value change.
    // use newEvent utility function (not provided by Angular) for better browser compatibility
    nameInput.dispatchEvent(new Event('input'));

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
  });
});
