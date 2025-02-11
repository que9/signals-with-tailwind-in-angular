import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-starwar-sales',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './starwar-sales.component.html',
  styleUrl: './starwar-sales.component.scss'
})
export class StarwarSalesComponent {

}
