import { Component, inject } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-header',
  imports: [NavigationComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
