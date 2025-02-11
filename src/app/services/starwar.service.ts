import { inject, Injectable, signal } from '@angular/core';

import { Vehicle, VehicleResponse} from '../models/vehicle.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StarwarService {
  private http                        = inject(HttpClient)
  private readonly API                = "https://swapi.py4e.com/"
  private readonly VEHICLE_ENDPOINT   = `${this.API}api/vehicles`

  vehicles = signal<Vehicle[]>([])
  selectedVehicle = signal(null)


  fetchVehicle() {
    this.http.get<VehicleResponse>(this.VEHICLE_ENDPOINT)
      .pipe(map(vehicleResponse => vehicleResponse.results))
      .subscribe(vehicles => this.vehicles.set(vehicles))
  }

}
