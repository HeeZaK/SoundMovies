import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarMovieComponent } from './search-bar-movie.component';

describe('SearchBarMovieComponent', () => {
  let component: SearchBarMovieComponent;
  let fixture: ComponentFixture<SearchBarMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
