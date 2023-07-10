import { Component, Output } from '@angular/core';
import { Campeao } from '../campeao';
import { MessageService } from '../message.service';
import { CampeoesService } from '../campeoes.service';

@Component({
  selector: 'app-campeoes',
  templateUrl: './campeoes.component.html',
  styleUrls: ['./campeoes.component.css']
})
export class CampeoesComponent {
  campeoes: any;

  selectedCampeao?: Campeao;

  constructor(private campeaoService: CampeoesService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.campeaoService.getCampeoes().subscribe({
        next: response => this.campeoes = response,
        error: erro => console.log(erro),
      }
    )
  }

  addCampeao(nome: string): void {
    if(nome == "")
      return;

    this.campeaoService.addCampeao(nome).subscribe({
      next: () => {},
      error: erro => console.log(erro)
    })
  }

  delCampeao(campeao: Campeao): void{
    this.campeaoService.delCampeao(campeao.id).subscribe({
      next: () => {},
      error: erro => console.log(erro)
    })
  }
}
