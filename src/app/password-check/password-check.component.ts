import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-check',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-check.component.html',
  styleUrl: './password-check.component.scss',
})
export class PasswordCheckComponent {
  password: string = '';
  passwordStrenght = '';
  errorMessage = '';

  takeInformationAboutPassword(): void {
    console.log('Your password is: ', this.password);
  }

  ratePasswordStrenght(): void {
    const onlyLetters = /[a-zA-Z]/.test(this.password);
    const onlyDigits = /\d/.test(this.password);
    const onlySymbols = /[^\w\s]/.test(this.password);

    if (this.password.length === 0) {
      this.passwordStrenght = '';
      this.errorMessage = '';
    } else if (this.password.length > 0 && this.password.length < 8) {
      this.passwordStrenght = '';
      this.errorMessage = 'Password should be at least 8 characters only';
      return;
    }

    if (this.password === '') {
      this.passwordStrenght = '';
      this.errorMessage = '';
    } else if (
      (onlyDigits && !onlyLetters && !onlySymbols) ||
      (onlyLetters && !onlyDigits && !onlySymbols) ||
      (onlySymbols && !onlyLetters && !onlyDigits)
    ) {
      this.passwordStrenght = 'easy';
      this.errorMessage = '';
    } else if (
      (onlyDigits && onlyLetters && !onlySymbols) ||
      (onlyDigits && onlySymbols && !onlyLetters) ||
      (onlyLetters && onlySymbols && !onlyDigits)
    ) {
      this.passwordStrenght = 'medium';
      this.errorMessage = '';
    } else {
      this.passwordStrenght = 'strong';
      this.errorMessage = '';
    }
  }
}
