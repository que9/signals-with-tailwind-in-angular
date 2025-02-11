import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-selection',
  imports: [ FormsModule ],
  template: `
    <div class=" border p-6 shadow-sm rounded-sm w-[500px] flex flex-col justify-self-center gap-2">
      <h2>Star Wars Vehicle Sales</h2>

      <select class="select" [(ngModel)]="selectedVehicle">
        <option value="null" disabled selected>--Select a vehicle</option>
        @for (vehicle of vehicles(); track vehicle) {
          <option [ngValue]="vehicle">{{vehicle.name}}</option>
        }
      </select>
      <div class="p-1 bg-slate-100">
        <span>Quantity: </span>
        <input type="number" [(ngModel)]='quantity' />
      </div>

      <div class="p-1 bg-slate-100">Vehicle : {{selectedVehicle()?.name}}</div>
      <div class="p-1 bg-slate-100">Price : {{selectedVehicle()?.cost_in_credits}}</div>
      <div class=" p-1 bg-slate-100" [style.color]="color()">Total : {{total()}}</div>

    </div>
  `
})
export class VehicleSelectionComponent {
  vehicleService    = inject(VehicleService)
  vehicles          = this.vehicleService.vehicles
  selectedVehicle   = this.vehicleService.selectedVehicle
  quantity          = this.vehicleService.quanity
  total             = this.vehicleService.total
  color             = this.vehicleService.color

}

