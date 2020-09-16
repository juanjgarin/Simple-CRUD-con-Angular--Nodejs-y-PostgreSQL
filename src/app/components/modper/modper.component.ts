import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../services/service.service'


declare var $: any;

@Component({
  selector: 'app-modper',
  templateUrl: './modper.component.html',
  styleUrls: ['./modper.component.css']
})
export class ModperComponent implements OnInit {

  constructor(public consulta : ServiceService) { }

 
  
  id = localStorage.getItem('idLocal');
  newID = JSON.parse(this.id);
  id_posta = this.newID['idLocal'];
  nombreOld = this.newID['nombreLocal'];
  apellidoOld = this.newID['apellidoLocal'];
  direccionOld = this.newID['direccionLocal'];
  telefonoOld = this.newID['telefonoLocal'];
  emailOld = this.newID['emailLocal'];

  ngOnInit(): void {
    console.log('prueba email', this.emailOld)

    var id = localStorage.getItem('idLocal');
    var newID = JSON.parse(this.id);
    var id_posta = this.newID['idLocal'];
    var nombreOld = this.newID['nombreLocal'];
    var apellidoOld = this.newID['apellidoLocal'];
    var direccionOld = this.newID['direccionLocal'];
    var telefonoOld = this.newID['telefonoLocal'];
    var emailOld = this.newID['emailLocal'];

    $(document).ready(function() {
      $('#nombre').val(nombreOld);
      $('#apellido').val(apellidoOld);
      $('#direccion').val(direccionOld);
      $('#telefono').val(telefonoOld);
      $('#email').val(emailOld);
  });
    /* var id = localStorage.getItem('idLocal');

    var newID = JSON.parse(id)
    console.log('newid:', newID['idLocal']); */
    /* $('#nombre').val('asdfg'); */

  }
  actualizarPersona (personaForm){
    if (confirm("Estas seguro de actualizar?")){
      console.log('SACADO DE FORM: ', personaForm.value)
      this.consulta.actualizarPersona(personaForm.value, this.id_posta ).subscribe(data=> location.href="http://localhost:4200/home");
    }
  }  
}
