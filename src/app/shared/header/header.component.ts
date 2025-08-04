import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SharedMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logoPath: string = 'assets/logo.png';

  constructor(
    private router: Router
  ){
  }
  @Input() isLoginPage = false;

  logout() {
    //localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      console.log(`Navigated to login`);
    })
  }
}

