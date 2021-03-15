import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Persona } from '../Pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona) {
    persona.pulsacion = (persona.edad * 210)/  100;
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }

}