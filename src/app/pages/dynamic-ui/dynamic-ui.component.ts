import { Component, computed, signal, effect, untracked, ElementRef } from '@angular/core';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';



const  DEFAULT_COUNTER = {
  tick        : 0,
  up          : true,
  difference  : 5,
  speed       : 250,
  ticking     : false,
}

@Component({
  selector    : 'app-dynamic-ui',
  imports     : [PrimaryButtonComponent, FormsModule, JsonPipe],
  templateUrl : './dynamic-ui.component.html',
  styleUrl    : './dynamic-ui.component.scss'
})
export class DynamicUiComponent {
  readonly counter = signal(DEFAULT_COUNTER)

  // Computed
  tick          = computed(() => this.counter().tick)
  speed         = computed(() => this.counter().speed)
  difference    = computed(() => this.counter().difference)
  ticking       = computed(() => this.counter().ticking)
  up            = computed(() => this.counter().up )


  // Signal methods
  reset       = () => this.counter.set(DEFAULT_COUNTER)
  start       = () => this.counter.update(state => ({ ...state, ticking: true }))
  stop        = () => this.counter.update(state => ({ ...state, ticking: false }))
  goUp        = () => this.counter.update(state => ({ ...state, up: true }))
  goDown      = () => this.counter.update(state => ({ ...state, up: false }))
  setSpeed    = (speed: number) => this.counter.update(v => ({ ...v, speed }))
  incrementBy = (difference: number) => this.counter.update(v => ({...v, difference}))

  private interval: NodeJS.Timeout | undefined = undefined

  private startStopCounter = effect(() => {
    const ticking       = this.ticking()
    const up            = this.up()
    const difference    = this.difference()
    const speed         = this.speed()

    untracked(() => this.doCount(ticking, up, difference, speed))
  })


  private doCount(ticking:boolean, up: boolean, difference: number, speed: number) {
    clearInterval(this.interval)
    if (ticking) {
        difference = up ? difference : difference * -1
        this.interval = setInterval(() => this.counter.update(state => ({
          ...state,
          tick: state.tick + difference
      })), speed)
    }
  }

  updateAdhoc(count: string) {
    this.counter.update(s => ({...s, tick: Number(count)}))
  }

  differenceChange(value:any) {
    this.incrementBy(Number(value.target.value))
  }

}
