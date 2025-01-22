import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SharedMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoPath: string = 'assets/logo.png';

  constructor(){
    console.log(this.logoPath)
  }
  @Input() isLoginPage = false;
}
