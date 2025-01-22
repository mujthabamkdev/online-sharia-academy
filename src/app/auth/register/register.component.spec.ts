import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AuthService } from '../auth.service';

describe('RegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent, HttpClientModule],  // Include HttpClientModule here
      providers: [AuthService]  // Include the necessary providers
    }).compileComponents();
  });

  it('should create the RegisterComponent', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});