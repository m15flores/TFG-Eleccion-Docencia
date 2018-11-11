import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../models/asignatura';
import { AsignaturasService } from '../asignaturas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Departamento } from '../models/departamento';
import { Desdoble } from '../models/desdoble';
import { Horario } from '../models/horario';

@Component({
  selector: 'app-anadir-asignatura',
  templateUrl: './anadir-asignatura.component.html',
  styleUrls: ['./anadir-asignatura.component.css']
})
export class AnadirAsignaturaComponent implements OnInit {

  asignatura: Asignatura;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;

  
  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute, private _formBuilder: FormBuilder) {
      this.asignatura = new Asignatura;
    }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });


    let id = this.route.snapshot.paramMap.get('id');

    if(id != null){
      this.angularService.getAsignatura(Number(id)).subscribe(
        asignatura => this.asignatura = asignatura        
        );
    }

  }
  newDesdoble():void{
    this.asignatura.desdobles.push(new Desdoble);
  }
  removeDesdoble():void{
    this.asignatura.desdobles.pop();
  }
  newHorario():void{
    this.asignatura.horario.push(new Horario);
  }
  removeHorario():void{
    this.asignatura.horario.pop();
  }
  save():void{
    this.angularService.saveAsignatura(this.asignatura);
  }

}
