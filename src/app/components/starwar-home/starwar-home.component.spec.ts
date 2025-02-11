import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarHomeComponent } from './starwar-home.component';

describe('StarwarHomeComponent', () => {
  let component: StarwarHomeComponent;
  let fixture: ComponentFixture<StarwarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarwarHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
