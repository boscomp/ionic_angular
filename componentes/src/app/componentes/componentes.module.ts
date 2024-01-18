import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [SaludaComponent, CabeceraComponent, ListadoComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule,
    CabeceraComponent,
  SaludaComponent,
  ListadoComponent]
})
export class ComponentesModule { }
