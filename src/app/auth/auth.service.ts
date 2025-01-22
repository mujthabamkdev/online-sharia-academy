import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          // Simulate token generation
          return { token: 'mock-jwt-token', user };
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      catchError(err => throwError(() => err))
    );
  }
  
  // Store JWT token in localStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  handleUnauthorizedError() {
    // You can handle the redirection or any other logic related to unauthorized access
    this.router.navigate(['/login']);
  }
}