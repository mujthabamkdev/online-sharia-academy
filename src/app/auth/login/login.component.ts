// auth/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedMaterialModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;  // Declare the loginForm property
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    
    // Initialize loginForm in the constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value; // Extract email and password from form

      this.authService.login(email, password).subscribe({
        next: (response) => {
          // Handle successful login
          console.log('Login successful', response);
          const userRole = response.role; // Assuming response contains user role
          const redirectRoute = userRole === 'admin' ? '/admin/dashboard' : '/student/dashboard';
          this.router.navigate([redirectRoute]).then(() => {
            console.log(`Navigated to ${redirectRoute}`);
          });
        },
        error: (error) => {
          // Handle error
          console.error('Login failed', error);
        },
        complete: () => {
          // Optional: Handle completion
          console.log('Login request completed');
        },
      });
    }
  }
}