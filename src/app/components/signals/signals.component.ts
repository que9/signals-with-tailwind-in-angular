import { Component, computed, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { VehicleSelectionComponent } from "../vehicle-selection/vehicle-selection.component";

@Component({
  selector: 'app-signals',
  imports: [PrimaryButtonComponent, VehicleSelectionComponent],
  template: `
    <div class="flex flex-col max-w-64  border shadow-sm p-5 m-3 rounded-sm justify-self-center items-center">
      <p>Count: {{count()}}</p>
      <p>Double count: {{doubleCount()}}</p>
      <app-primary-button label="+" class="mt-2" (click)="updateCount('+')">+</app-primary-button>
      <app-primary-button label="-" (click)="updateCount('-')">-</app-primary-button>
      <br/>
    </div>
    <app-vehicle-selection></app-vehicle-selection>
  `,
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  count = signal(0)
  doubleCount = computed(() => this.count() * 2)
  updateCount(action: string = '+') {
    action === '+'
      ? this.count.set(this.count() + 1)
      : this.count.set(this.count() - 1)
  }
}
