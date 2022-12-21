import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCrudService } from '../../../servicios/servicio-crud.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  public formulario:FormGroup
  constructor( public servicio:ServicioCrudService,
    public formbuilder:FormBuilder,
    public router:Router) { 

      this.formulario=this.formbuilder.group({
      id: [''],
      nombre:[''],
      apellidos:[''],
      ciudad:[''],
      telefono:[''],
      email:[''],
      mes_disponible:['']
      })
    }

  ngOnInit(): void {
  }


  enviar(){
    this.servicio.Crear(this.formulario.value)
    this.router.navigate([''])
  }
}
