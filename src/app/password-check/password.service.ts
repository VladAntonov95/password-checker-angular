import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}

  checkPasswordStrength(
    password: string,
    passwordStrenght: string,
    errorMessage: string
  ): string {
    const onlyLetters = /[a-zA-Z]/.test(password);
    const onlyDigits = /\d/.test(password);
    const onlySymbols = /[^\w\s]/.test(password);

    if (password.length === 0) {
      passwordStrenght = '';
      errorMessage = '';
    } else if (password.length > 0 && password.length < 8) {
      passwordStrenght = '';
      errorMessage = 'Password should be at least 8 characters only';
    } else {
      if (password === '') {
        passwordStrenght = '';
        errorMessage = '';
      } else if (
        (onlyDigits && !onlyLetters && !onlySymbols) ||
        (onlyLetters && !onlyDigits && !onlySymbols) ||
        (onlySymbols && !onlyLetters && !onlyDigits)
      ) {
        passwordStrenght = 'easy';
        errorMessage = '';
      } else if (
        (onlyDigits && onlyLetters && !onlySymbols) ||
        (onlyDigits && onlySymbols && !onlyLetters) ||
        (onlyLetters && onlySymbols && !onlyDigits)
      ) {
        passwordStrenght = 'medium';
        errorMessage = '';
      } else {
        passwordStrenght = 'strong';
        errorMessage = '';
      }
    }

    return errorMessage || passwordStrenght;
  }
}
