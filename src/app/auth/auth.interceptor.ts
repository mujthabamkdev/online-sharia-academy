import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Directly clone the request and add the Authorization header if token exists
    const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken() || ''}`
        }
      });
  
      // Pass the cloned request to the next handler in the HTTP pipeline
      return next.handle(clonedRequest).pipe(
        catchError((error) => {
          // Pass the error to the AuthService if 401 error occurs
          if (error.status === 401) {
            this.authService.handleUnauthorizedError();
          }
          return throwError(() => new Error(error)); // Pass the error along
        })
      );
  }
}