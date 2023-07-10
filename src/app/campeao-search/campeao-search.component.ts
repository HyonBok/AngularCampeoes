import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Campeao } from '../campeao';

@Component({
  selector: 'app-campeao-search',
  templateUrl: './campeao-search.component.html',
  styleUrls: [ './campeao-search.component.css' ]
})
export class CampeaoSearchComponent implements OnInit {
  campeoes$!: Observable<Campeao[]>;
  private searchTerms = new Subject<string>();

  constructor() {}

  search(term: string): void {
    
  }

  ngOnInit(): void {
    
  }
}