import { TestBed } from '@angular/core/testing';

import { PersonaService } from './persona.service';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
