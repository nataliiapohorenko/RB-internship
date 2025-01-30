import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './shared/components/list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {}
