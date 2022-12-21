import { Component, OnInit } from '@angular/core';
import { ServicioCrudService } from 'src/app/servicios/servicio-crud.service';
import { InterfazPortero } from '../../interfaces/interfaz-portero';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  portero:InterfazPortero [] =[];
  constructor(private servicio:ServicioCrudService) { }

  ngOnInit(): void {

    this.servicio.select().subscribe(
      (resp: any) => {
        this.portero = [];
        resp.forEach( (portero: any) => {
          this.portero.push({
            documentId: portero.payload.doc.id,
           ...portero.payload.doc.data()
          })
         
        });
      }
    )
  }


  quitar(id: string) {
    
    this.servicio.delete(id).then(
      () =>{
      }, (error)=>{
        console.error(error);
      }

    );
  } 
}
  


