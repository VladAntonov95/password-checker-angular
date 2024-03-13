import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-password.component.html',
})
export class InputPasswordComponent {
  @Output() passwordChange = new EventEmitter<string>();
  password: string = '';
  passwordStrength = '';
  errorMessage = '';

  constructor(private passwordService: PasswordService) {}

  ratePasswordStrength(): void {
    this.passwordStrength = this.passwordService.checkPasswordStrength(
      this.password,
      this.passwordStrength,
      this.errorMessage
    );
    this.passwordChange.emit(this.password);
    console.log('this pas: ', this.password);
    console.log('strength', this.passwordStrength);
  }
}
