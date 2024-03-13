import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-text',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="text-left">
    <p>Your password is: {{ passwordStrength }}</p>
  </div>`,
})
export class PasswordStrengthTextComponent {
  @Input() passwordStrength: string = '';
}
