import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPasswordComponent } from './input-password/input-password.component';
import { PasswordService } from './password.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { PasswordStrengthIndexComponent } from './password-strength-index/password-strength-index.component';
import { PasswordStrengthTextComponent } from './password-strength-text/password-strength-text.component';

@Component({
  selector: 'app-password-check',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputPasswordComponent,
    ErrorMessageComponent,
    PasswordStrengthIndexComponent,
    PasswordStrengthTextComponent,
  ],
  templateUrl: './password-check.component.html',
})
export class PasswordCheckComponent {
  password: string = '';
  passwordStrenght: string = '';
  errorMessage: string = '';

  constructor(private passwordService: PasswordService) {}

  onPasswordChange(password: string) {
    this.passwordStrenght = this.passwordService.checkPasswordStrength(
      password,
      this.passwordStrenght,
      this.errorMessage
    );
    if (
      this.passwordStrenght !== 'strong' &&
      this.passwordStrenght !== 'medium' &&
      this.passwordStrenght !== 'easy'
    ) {
      this.errorMessage = this.passwordStrenght;
      this.passwordStrenght = '';
    } else {
      this.errorMessage = '';
    }
  }
}
