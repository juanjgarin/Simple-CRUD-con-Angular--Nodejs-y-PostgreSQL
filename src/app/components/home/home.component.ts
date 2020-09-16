import { Component, OnInit } from '@angular/core';

import  { ServiceService } from '../../services/service.service'

import { NgForm } from '@angular/forms';

/* import * as $  from 'jquery'; */

import { PersonaInterface } from '../../models/persona-interface';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  personas: any[];

  public selectedPersonas: PersonaInterface = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    id : null,
    email: ''
  };

  constructor(public consulta: ServiceService) { 
  
  }

  ngOnInit(): void {
    this.getListapersonas();

    setTimeout(function () {
      $(function () {
        $("#test_datatable_angular, #test_datatable_angular2, #test_datatable_angular3").DataTable({
          "language": {
            sProcessing: "Procesando...",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sEmptyTable: "Ningún dato disponible en esta tabla",
            sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
            sInfoPostFix: "",
            sSearch: "Buscar:",
            sUrl: "",
            sInfoThousands: ",",
            sLoadingRecords: "Cargando...",
            oPaginate: {
              sFirst: "Primero",
              sLast: "Último",
              sNext: "Siguiente",
              sPrevious: "Anterior",
            },
            oAria: {
              sSortAscending: ": Activar para ordenar la columna de manera ascendente",
              sSortDescending: ": Activar para ordenar la columna de manera descendente",
            }
        },
        responsive: "true",
        dom: 'Bfrtilp',       
        buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-info'
			},
		]
        });
      });
    }, 500);

  }

  
  getListapersonas(){
    this.consulta.obtenerPersonas().subscribe((data: any)=>{
      this.personas = data;
      console.log(data);
    });
  };

  guardarPersona(personaForm: NgForm) {
    if (personaForm.value.nombre == 0 || personaForm.value.apellido == 0 || personaForm.value.direccion == 0 || personaForm.value.telefono == 0 || personaForm.value.email == 0) {
      alert('Usted tiene un campo vacío..')
    } else {
      console.log(personaForm.value);
      this.consulta.crearPersona(personaForm.value).subscribe(data =>
        location.reload())
    }
  };

  eliminarPersona(id: string) {
    if (confirm('Estás seguro que desea eliminarl@?')) {
      this.consulta.bajaPersona(id).subscribe(data => location.reload())
    }
  }
  
  localPersona(persona: object){
/*     console.log(persona) */
    if (confirm("Estas seguro de actualizar?")){
      var personaLocal = {
        'idLocal': persona["id"],
        'nombreLocal': persona["nombre"],
      }
      var personaObj = JSON.stringify(personaLocal)
      localStorage.setItem('idLocal', personaObj);
     console.log(personaLocal)
    }
  }

}
