import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div
      routerLink="/"
      class=" cursor-pointer w-32">
      <img src="starwars/Star_Wars-Logo.wine.png" alt="StarWar">
    </div>
  `,
})
export class LogoComponent {

}
