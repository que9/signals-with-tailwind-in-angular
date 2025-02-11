import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarSalesComponent } from './starwar-sales.component';

describe('StarwarSalesComponent', () => {
  let component: StarwarSalesComponent;
  let fixture: ComponentFixture<StarwarSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarwarSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
