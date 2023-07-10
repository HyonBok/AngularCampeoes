import { Component, Input } from '@angular/core';
import { Campeao } from '../campeao';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CampeoesService } from '../campeoes.service';

@Component({
  selector: 'app-campeao-detail',
  templateUrl: './campeao-detail.component.html',
  styleUrls: ['./campeao-detail.component.css']
})
export class CampeaoDetailComponent {
  campeao?: Campeao;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private campeaoService: CampeoesService
  ){}

  ngOnInit(): void {
    this.getCampeao();
  }
  
  getCampeao(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.campeaoService.getCampeao(id).subscribe({
      next: response => this.campeao = response,
      error: erro => console.log(erro),
    })
  }

  goBack(): void {
    this.location.back();
  }
}
