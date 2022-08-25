import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  public loginUtilisateurFormRemote(utilisateur: Utilisateur): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8181/api/v1/login", utilisateur)
  }

  public registerUtilisateurForm(utilisateur: Utilisateur): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8181/api/v1/registration", utilisateur)
  }
}
