import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
