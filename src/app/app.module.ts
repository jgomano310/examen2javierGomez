import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { CrearComponent } from './componentes/crear/crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './componentes/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
