import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, linkedSignal, signal} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, forkJoin, map, of, shareReplay } from 'rxjs';
import { Vehicle, VehicleResponse } from '../models/vehicle.model';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly API                = 'https://swapi.py4e.com/'
  private readonly VEHICLE_ENDPOINT   = `${this.API}api/vehicles`
  private http                        = inject(HttpClient)

  selectedVehicle = signal<Vehicle | null>(null)

  total = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0) * this.quanity())

  color = computed(() => this.total() > 100000 ? 'red' : 'green')

  quanity   = linkedSignal({
    source: this.selectedVehicle,
    computation: selectedVehicle => selectedVehicle ? 1 : 0
  })

  vehicles = computed(() => this.vehicleResource.value() ?? [])

  vehicles$ = this.http
    .get<VehicleResponse>(this.VEHICLE_ENDPOINT)
    .pipe(
      map(data => {
        return data.results.map(v => ({
          ...v,
          cost_in_credits: isNaN(v.cost_in_credits) ? String(Math.floor(Math.random() * 1000)) : v.cost_in_credits
        } as Vehicle))
      }),
      shareReplay(),
      delay(1000)
    )

  vehicleResource  = rxResource({
    loader : () => this.vehicles$
  })

  // vehicleFilmsResource = rxResource({
  //   request: this.selectedVehicle,
  //   loader: ({ request: vehicle }) => {
  //     return vehicle
  //       ? forkJoin(vehicle.films.map(link => this.http.get<Film>(link)))
  //       : of([] as Film[])
  //   }
  // })

}









/**

  vehicleResource   = rxResource({
    loader : () => this.http
    .get<VehicleResponse>(this.VEHICLE_ENDPOINT)
    .pipe(map(vehicleRes => vehicleRes.results ))
  })
  vehicles          = computed(() => this.vehicleResource.value() ?? [] as Vehicle[])
  selectedVehicle   = signal<Vehicle | undefined>(undefined)
  quantity = linkedSignal({
    source : this.selectedVehicle,
    computation: (selectedVehicle) => selectedVehicle ? 1 : 0
  })
  total             = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0) * this.quantity())
  color             = computed(() => this.total() > 50000 ? 'green' : 'blue' )
   */
