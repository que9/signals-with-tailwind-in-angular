import { Component, inject, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { StarwarService } from '../../services/starwar.service';

@Component({
  selector: 'app-vehicle-list',
  imports: [PrimaryButtonComponent],
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent implements OnInit {
  starwarService    = inject(StarwarService)
  vehicles          = this.starwarService.vehicles
  selectedVehicle   = this.starwarService.selectedVehicle

  ngOnInit(): void {
      this.starwarService.fetchVehicle()
  }
}
