import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthIndexComponent } from './password-strength-index.component';

describe('PasswordStrengthIndexComponent', () => {
  let component: PasswordStrengthIndexComponent;
  let fixture: ComponentFixture<PasswordStrengthIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengthIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
