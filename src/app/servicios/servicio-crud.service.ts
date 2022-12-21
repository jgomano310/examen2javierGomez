import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { getFirestore } from '@angular/fire/firestore';
import { InterfazPortero } from '../interfaces/interfaz-portero';
@Injectable({
  providedIn: 'root'
})
export class ServicioCrudService {

  constructor(private servicioFirebase:AngularFirestore) {
   }

  
//metodo borrar
  delete(id:string){
    return this.servicioFirebase.collection('portero').doc(id).delete();
  }
//metodo seleccionar
  select(){
    return this.servicioFirebase
          .collection('portero').snapshotChanges()

  }
//metodo crear
  Crear(portero:InterfazPortero){
    return new Promise<any> ( ( resolve, reject)=>{

      this.servicioFirebase
            .collection('portero').add(portero).then( (Response)=>{console.log(Response)
            },
            (error)=>{
              reject(error)
            })

    })
  }

  //metodo actualizar-update

Actualizar(portero:InterfazPortero, id:any){
return this.servicioFirebase.collection('portero').doc(id).update(portero);


}


//seleccionar por id
SelectPorId(id:any){

  return this.servicioFirebase.collection('portero').doc(id).valueChanges()

}



}
