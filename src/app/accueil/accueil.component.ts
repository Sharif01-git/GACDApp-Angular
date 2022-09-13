import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  id!: number
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private router: Router,private route: ActivatedRoute, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.utilisateur = new Utilisateur();
    this.utilisateurService.getUtilisateurById(this.id).subscribe(data => {
    this.utilisateur = data;
    });
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

  goToDent(){
    this.router.navigate(['/dent']);
  }

  goToRendezvous(){
    this.router.navigate(['/rendez-vous']);
  }
}
