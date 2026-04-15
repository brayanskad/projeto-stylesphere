import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Carrossel } from './carrossel/carrossel';
import { Carrossel2 } from './carrossel-2/carrossel-2';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Carrossel, Carrossel2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-stylesphere');
}