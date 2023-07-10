import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campeao } from './campeao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampeoesService {

  baseUrl = "http://localhost:5200/api/Campeao/"

  constructor(private http: HttpClient) { }

  getCampeoes(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getCampeao(id: number): Observable<any>{
    return this.http.get(this.baseUrl + id);
  }

  addCampeao(nome: string): Observable<any>{
    return this.http.post(this.baseUrl + "add?nome=" + nome, {})
  }

  delCampeao(id: number): Observable<any>{
    return this.http.delete(this.baseUrl + "del?id=" + id)
  }
}
