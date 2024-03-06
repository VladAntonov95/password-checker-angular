import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordCheckComponent } from './password-check/password-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordCheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'password-checker';
}
