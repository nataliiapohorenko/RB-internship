import {
  Component,
  inject,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthFormInterface } from '../../models/auth-form.model';
import { ValidationError } from '../../pipes/validation-error.pipe';
import {
  nameValidator,
  emailValidator,
  minLengthValidator,
  uppercaseValidator,
  specialCharValidator,
} from '../../../validators/auth-validation';
import { RouterLink } from '@angular/router';
import { RoutingConstants } from '../../../constants/routes.constants';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ValidationError, RouterLink],
})
export class AuthComponent implements OnInit {
  @Input() action!: string;
  @Input() isNameRequired!: boolean;
  @Output() sendForm = new EventEmitter<AuthFormInterface>();

  RoutingConstants = RoutingConstants;
  private fb: FormBuilder = inject(FormBuilder);

  registerForm = this.fb.group({
    name: [
      '',
      {
        validators: this.isNameRequired
          ? [Validators.required, nameValidator]
          : [],
        updateOn: 'change',
      },
    ],
    email: [
      '',
      { validators: [Validators.required, emailValidator], updateOn: 'change' },
    ],
    password: [
      '',
      {
        validators: [
          Validators.required,
          minLengthValidator,
          uppercaseValidator,
          specialCharValidator,
        ],
        updateOn: 'change',
      },
    ],
  });

  isSubmitted = false;

  ngOnInit(): void {
    this.configureFormValidators();
  }

  configureFormValidators() {
    const nameControl = this.registerForm.get('name');

    if (this.isNameRequired) {
      nameControl?.setValidators([Validators.required, nameValidator]);
    } else {
      nameControl?.clearValidators();
    }
    nameControl?.updateValueAndValidity();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    const rawFormData = this.registerForm.value;
    const formData: AuthFormInterface = {
      email: rawFormData.email ?? '',
      password: rawFormData.password ?? '',
      name: rawFormData.name ?? '',
    };
    this.sendForm.emit(formData);
  }
}
