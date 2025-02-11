import { Component } from '@angular/core';

@Component({
  selector: 'app-starwar-home',
  template: `
    <div class="mx-auto p-8 max-w-5xl">
      <div class="flex items-center flex-col-reverse md:flex-row">
        <div class="w-[70%] mt-10 md:mt-0">
          <img src="starwars/starwar_craft2.jpeg" alt="Start war craft" />
        </div>
        <div class="text-4xl text-center">
          <div class=" text-sky-500 font-bold text-8xl mb-5">StarWars</div>
          <div>Vehicle Sale.</div>
        </div>
      <div>
    </div>
  `
})
export class StarwarHomeComponent {
}
