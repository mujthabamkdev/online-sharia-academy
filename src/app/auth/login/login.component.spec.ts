import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';  // Import the standalone LoginComponent
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule if needed
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule for form handling

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientModule, ReactiveFormsModule],  // Import LoginComponent here
    }).compileComponents();
  });

  it('should create the LoginComponent', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});