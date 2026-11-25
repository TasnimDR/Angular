import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ConferenceList } from './core/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-app');
}
