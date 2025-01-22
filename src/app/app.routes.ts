import { Routes } from '@angular/router';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'student/dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];
