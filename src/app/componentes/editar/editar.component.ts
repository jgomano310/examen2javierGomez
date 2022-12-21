import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ServicioCrudService } from '../../servicios/servicio-crud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public editar:FormGroup
  referencia:any;
  constructor(

    public servicio: ServicioCrudService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private Router: Router
  ) {
    this.editar = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellidos: [''],
      ciudad: [''],
      telefono: [''],
      email: [''],
      mes_disponible: ['']
    })

  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.servicio.SelectPorId(id).subscribe(res => {
      this.referencia = res;
      this.editar = this.formBuilder.group({
        id: [this.referencia.id],
        nombre: [this.referencia.nombre],
        apellidos: [this.referencia.apellidos],
        ciudad: [this.referencia.ciudad],
        telefono: [this.referencia.telefono],
        email: [this.referencia.email],
        mes_disponible: [this.referencia.mes_disponible]
      })
    })
  }

  enviar() {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.servicio.Actualizar(this.editar.value, id)
    this.Router.navigate([''])
  }

}
