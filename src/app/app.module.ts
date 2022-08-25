import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './utilisateur-details/utilisateur-details.component';
import { DentsComponent } from './dents/dents.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurListComponent,
    UpdateUtilisateurComponent,
    UtilisateurDetailsComponent,
    DentsComponent,
    PatientListComponent,
    CreatePatientComponent,
    PatientDetailsComponent,
    UpdatePatientComponent,
    LoginComponent,
    RegistrationComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
