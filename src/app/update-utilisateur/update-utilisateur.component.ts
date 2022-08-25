import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  id!: number;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurservice: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.utilisateurservice.getUtilisateurById(this.id).subscribe(data => {
      this.utilisateur = data;
    }, 
    error => console.log(error));
  }

  onSubmit(){
   this.utilisateurservice.updateUtilisateur(this.id, this.utilisateur).subscribe(data => {
   this.goToUtilisateurList();
   }
   ,error => console.log(error));  
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
