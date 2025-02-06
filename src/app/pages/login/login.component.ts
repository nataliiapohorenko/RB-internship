import { Component, inject } from '@angular/core';
import { AuthFormInterface } from '../../shared/models/auth-form.model';
import { AuthComponent } from '../../shared/components/auth-form/auth-form.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../constants/routes.constants';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  imports: [AuthComponent],
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  handleFormSubmit(formData: AuthFormInterface): void {
    this.authService
      .login({ email: formData.email, password: formData.password })
      .subscribe({
        next: () => {
          this.router.navigate([RoutingConstants.HOME]);
        },
        error: err => {
          console.error('Registration failed:', err);
        },
      });
  }
}
