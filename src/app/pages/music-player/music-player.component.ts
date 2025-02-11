import { Component, signal } from '@angular/core';
import { SongListComponent } from "../../components/music-player/song-list/song-list.component";
import { MusicHeadComponent } from "../../components/music-player/music-head/music-head.component";

@Component({
  selector: 'app-music-player',
  imports: [SongListComponent, MusicHeadComponent],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {
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
