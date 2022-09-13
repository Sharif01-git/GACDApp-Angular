import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DentsComponent } from './dents/dents.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './utilisateur-details/utilisateur-details.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';

const routes: Routes = [
  //Routes pour les utilisateurs
  {path: 'utilisateurs', component: UtilisateurListComponent},
  {path: 'update-utilisateur/:id', component: UpdateUtilisateurComponent},
  {path: 'utilisateur-details/:id', component: UtilisateurDetailsComponent},

  //Routes pour les patients
  {path: 'patients', component: PatientListComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: 'update-patient/:id', component: UpdatePatientComponent},
  {path: 'patient-details/:id', component: PatientDetailsComponent},

  //Route de login
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  //Route pour l'enrégistrement
  {path: 'registration', component: RegistrationComponent},

  //Accueil
  {path: 'accueil', component: AccueilComponent},
  //Dents
  {path: 'dent', component: DentsComponent},
  //Rendez-vous
  {path: 'rendez-vous', component: RendezVousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
