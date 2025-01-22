import { Component } from '@angular/core';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@Component({
  selector: 'app-footer',
  imports: [SharedMaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
