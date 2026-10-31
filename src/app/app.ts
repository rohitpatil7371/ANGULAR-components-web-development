import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet,Header,Home,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');
}
