import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template:
    '<div *ngIf="errorMessage" class="text-red-500">{{ errorMessage }}</div>',
})
export class ErrorMessageComponent {
  @Input() errorMessage: string = '';
}
