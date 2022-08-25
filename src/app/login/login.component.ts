import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilisateur = new Utilisateur();
  msg='';
  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUtilisateur(){
    this.registrationService.loginUtilisateurFormRemote(this.utilisateur).subscribe(
      data => {
      console.log("Reponse reçu");
      this.goToAccuiel();
    },
    error => {
      console.log("Exception rencontrée");
      this.msg="les informations entrées sont incorrectes.";
    })
  }

  goToAccuiel(){
    this.router.navigate(['/accueil']);
  }

  goToRegistration(){
    this.router.navigate(['/registration']);
  }
}
