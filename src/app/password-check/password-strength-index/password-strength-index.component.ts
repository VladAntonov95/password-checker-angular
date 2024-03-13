import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength-index.component.html',
})
export class PasswordStrengthIndexComponent {
  @Input() passwordStrength: string = '';

  getStyle(index: number) {
    let backgroundColor = '';
    switch (this.passwordStrength) {
      case 'easy':
        backgroundColor = index === 0 ? 'red' : 'lightgray';
        break;
      case 'medium':
        backgroundColor = index < 2 ? 'yellow' : 'lightgray';
        break;
      case 'strong':
        backgroundColor = 'green';
        break;
      default:
        backgroundColor = 'lightgray';
        break;
    }
    return {
      'background-color': backgroundColor,
      border: '1px solid black',
      flex: '1',
    };
  }
}
