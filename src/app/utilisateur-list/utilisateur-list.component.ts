import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Utilisateur} from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurservice: UtilisateurService,
    private router: Router) { }

  ngOnInit(): void {

    this.getUtilisateurs();
  }


  private getUtilisateurs(){
    this.utilisateurservice.getUtilisateursList().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  utilisateurDetails(id: number){
    this.router.navigate(['utilisateur-details', id]);
  }

  updateUtilisateur(id: number) {
    this.router.navigate(['update-utilisateur', id]);
  }

  deleteUtilisateur(id: number) {
    this.utilisateurservice.deleteUtilisateur(id).subscribe(data => {
      console.log(data);
      this.getUtilisateurs();
    })
  }
  goToPatientList(){
    this.router.navigate(['/patients']);
  }

  goToUtilisateurList(){
    this.router.navigate(['/utilisateurs']);
  }

  goToPatientCreate(){
    this.router.navigate(['/create-patient']);
  }

  goToAccuiel(){
    this.router.navigate(['/accueil']);
  }
}
