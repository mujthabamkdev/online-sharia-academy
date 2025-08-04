import { Routes } from '@angular/router';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { EnrollmentComponent } from './student/enrollment/enrollment.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'student/dashboard', component: DashboardComponent },
  { path: 'student/enrollment', component: EnrollmentComponent },
  { path: '**', redirectTo: '' },
];
