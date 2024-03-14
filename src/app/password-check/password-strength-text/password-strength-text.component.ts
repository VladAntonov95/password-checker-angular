import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-text',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container>
    <p>Your password is: {{ passwordStrength }}</p>
  </ng-container>`,
})
export class PasswordStrengthTextComponent {
  @Input() passwordStrength: string = '';
}
