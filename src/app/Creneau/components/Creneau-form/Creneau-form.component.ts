import { Component, OnInit } from '@angular/core';
import { Creneau } from '../../model/Creneau';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreneauService } from '../../service/Creneau.service';
import { Agent } from 'src/app/shared/models/agent';

@Component({
  selector: 'app-Creneau-form',
  templateUrl: './Creneau-form.component.html',
  styleUrls: ['./Creneau-form.component.css'],
})
export class CreneauFormComponent implements OnInit {
  banquier:Agent;
  codeId: String;
  operator: Creneau;
  operators: Creneau[];
  creneauForm = new FormGroup({
    dateDebut: new FormControl('', Validators.required),
    dateFin: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    
  });

  



  get dateDebut() {
    return this.creneauForm.get('dateDebut');
  }

  get dateFin() {
    return this.creneauForm.get('dateFin');
  }

  get status() {
    return this.creneauForm.get('status');
  }
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ceneauService: CreneauService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.operator = this.creneauForm.value;
    console.log(this.operator);
    this.ceneauService
      .save(this.operator)
      .subscribe((result) => this.goToClientList());
  }

  goToClientList() {
    this.router.navigate(['/clients']);
  }

  reset() {
    this.creneauForm.reset();
  }
}
