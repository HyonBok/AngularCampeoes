import { Component, Input } from '@angular/core';
import { Campeao } from '../campeao';

@Component({
  selector: 'app-campeao-detail',
  templateUrl: './campeao-detail.component.html',
  styleUrls: ['./campeao-detail.component.css']
})
export class CampeaoDetailComponent {
  @Input() campeao?: Campeao;
}
