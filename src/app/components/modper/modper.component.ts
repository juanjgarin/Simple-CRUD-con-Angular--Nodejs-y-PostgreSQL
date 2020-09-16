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


  ngOnInit(): void {
    $(document).ready(function() {
      console.log( "ready!" );
      $('#nombre').val('test');
  });
    var id = localStorage.getItem('idLocal');

    var newID = JSON.parse(id)
    console.log(newID);
    $('#nombre').val('asdfg');

  }
  actualizarPersona (personaForm){
    if (confirm("Estas seguro de actualizar?")){
      console.log(this.id)
      this.consulta.actualizarPersona(personaForm.value,this.id).subscribe(data=> location.href="http://localhost:4200/home");
    }
  }  
}
