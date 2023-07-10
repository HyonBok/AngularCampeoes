import { Component, OnInit } from '@angular/core';
import { Campeao } from '../campeao';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  campeoes: Campeao[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    
  }
}