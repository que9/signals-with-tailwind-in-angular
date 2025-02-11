import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class PrimaryButtonComponent {
  label = input('')
  btnClicked = output()

  handleClick() {
    this.btnClicked.emit()
  }
}
