import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientservice: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    this.patientservice.getPatientsList().subscribe(data => {
      this.patients = data;
    });
  }

  patientDetails(id: number){
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: number) {
    this.patientservice.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
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

  goToDent(){
    this.router.navigate(['/dent']);
  }

  goToRendezvous(){
    this.router.navigate(['/rendez-vous']);
  }
}
