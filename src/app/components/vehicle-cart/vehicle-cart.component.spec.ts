import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCartComponent } from './vehicle-cart.component';

describe('VehicleCartComponent', () => {
  let component: VehicleCartComponent;
  let fixture: ComponentFixture<VehicleCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
