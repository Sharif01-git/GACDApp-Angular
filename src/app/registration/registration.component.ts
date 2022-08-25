import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  utilisateur = new Utilisateur();
  msg = "";
  constructor(private registerService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUtilisateur(){
    this.registerService.registerUtilisateurForm(this.utilisateur).subscribe(
      data => {
        console.log("Reponse reçu");
        this.router.navigate(['/login']);
    },
    error => {
      console.log("Exception rencontrée");
      this.msg="Veuillez vérifier les données entrées";
    })
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
