import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PersonaInterface } from '../models/persona-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  persona: Observable<any>;

  public selectedPersonas: PersonaInterface = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    id : null,
    email: ''
  };

  constructor(private consulta: HttpClient) {

   };

  obtenerPersonas(){
    return this.consulta.get(`http://localhost:3000/personas`)
    .pipe(map(data=>data));
  }

  crearPersona(persona){
    return this.consulta.post(`http://localhost:3000/personas`, persona)
  .pipe(map(data=>data))
  }

  bajaPersona(id:String){
      return this.consulta.delete(`http://localhost:3000/personas/${id}`).pipe(map(data=> data))
  }
  
  actualizarPersona(persona, id){
    return this.consulta.put(`http://localhost:3000/personas/${id}`, persona).pipe(map(data=>data))
  }

}
