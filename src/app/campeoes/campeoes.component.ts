import { Component } from '@angular/core';
import { Campeao } from '../campeao';
import { CAMPEOES } from '../listaCampeao';

@Component({
  selector: 'app-campeoes',
  templateUrl: './campeoes.component.html',
  styleUrls: ['./campeoes.component.css']
})
export class CampeoesComponent {
  campeoes = CAMPEOES;

  selectedCampeao?: Campeao;

  onSelect(campeao: Campeao): void{
    if(this.selectedCampeao == campeao){
      this.selectedCampeao = undefined;
      return;
    }
    
    this.selectedCampeao = campeao;
  }
}
