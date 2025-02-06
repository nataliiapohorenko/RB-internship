import { Component, inject } from '@angular/core';
import { AuthFormInterface } from '../../shared/models/auth-form.model';
import { AuthComponent } from '../../shared/components/auth-form/auth-form.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../constants/routes.constants';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  imports: [AuthComponent],
})
export class SignUpComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  handleFormSubmit(formData: AuthFormInterface): void {
    this.authService.signup(formData).subscribe({
      next: () => {
        this.router.navigate([RoutingConstants.HOME]);
      },
      error: err => {
        console.error('Registration failed:', err);
      },
    });
  }
}
