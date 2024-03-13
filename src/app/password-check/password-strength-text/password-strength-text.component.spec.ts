import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthTextComponent } from './password-strength-text.component';

describe('PasswordStrengthTextComponent', () => {
  let component: PasswordStrengthTextComponent;
  let fixture: ComponentFixture<PasswordStrengthTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengthTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
