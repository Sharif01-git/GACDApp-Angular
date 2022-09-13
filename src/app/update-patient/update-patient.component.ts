import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id!: number;
  patient: Patient = new Patient();
  constructor(private patientservice: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientservice.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    }, 
    error => console.log(error));
  }

  onSubmit(){
    this.patientservice.updatePatient(this.id, this.patient).subscribe(data => {
    this.goToPatientList();
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

  goToDent(){
    this.router.navigate(['/dent']);
  }

  goToRendezvous(){
    this.router.navigate(['/rendez-vous']);
  }
}
