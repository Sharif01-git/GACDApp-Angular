import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl = "http://localhost:8181/api/v1/utilisateurs";
  constructor(private httpClient: HttpClient) { }

  getUtilisateursList(): Observable<Utilisateur[]>{

    return this.httpClient.get<Utilisateur[]>(this.baseUrl);
  }

  getUtilisateurById(id: number): Observable<Utilisateur>{
    return this.httpClient.get<Utilisateur>(`${this.baseUrl}/${id}`);
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
