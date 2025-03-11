import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-music-player2',
  imports: [],
  templateUrl: './music-player2.component.html',
  styleUrl: './music-player2.component.scss'
})
export class MusicPlayer2Component {
  icons = signal([
      'fa-solid fa-bars',
      'fa-solid fa-home',
      'fa-solid fa-search',
      'fa-solid fa-volume-up',
      'fa-solid fa-user',
      'fa-brands fa-spotify',
      'fa-solid fa-cog',
      'fa-brands fa-soundcloud',
    ])
}
