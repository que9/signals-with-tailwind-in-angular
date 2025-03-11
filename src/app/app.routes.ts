import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { SignalsComponent } from './components/signals/signals.component';
import { StarwarSalesComponent } from './pages/starwar-sales/starwar-sales.component';
import { VehicleCartComponent } from './components/vehicle-cart/vehicle-cart.component';
import { AboutComponent } from './components/about/about.component';
import { DynamicUiComponent } from './pages/dynamic-ui/dynamic-ui.component';
import { MusicPlayerComponent } from './pages/music-player/music-player.component';
import { StarwarHomeComponent } from './components/starwar-home/starwar-home.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { MusicPlayer2Component } from './components/music-player2/music-player2.component';


export const routes: Routes = [
  {
    path: '', component: StarwarSalesComponent,
    children: [
      { path: '', component: StarwarHomeComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'list', component: VehicleListComponent },
      { path: 'cart', component: VehicleCartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'todo', component: TodosComponent },
      { path: 'signals', component: SignalsComponent },
      { path: 'dynamic-ui', component: DynamicUiComponent},
    ]
  },
  { path: 'music-player', component: MusicPlayerComponent },
  { path: 'music-player2', component: MusicPlayer2Component },
];
