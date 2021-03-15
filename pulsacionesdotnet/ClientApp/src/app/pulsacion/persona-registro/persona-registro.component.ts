import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PersonaService) { }
  ngOnInit() {
    this.persona = new Persona();
  }

  add() {
    alert('Persona Agregada' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }
}