import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   title = 'online-sharia-academy'; 

   isLoginPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      console.log("printing in app component" + this.router.url)
      this.isLoginPage = this.router.url === '/login' || this.router.url === '/'; // Adjust for other routes if needed
    });
  }
}