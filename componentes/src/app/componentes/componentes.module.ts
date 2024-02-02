import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SaludaComponent, CabeceraComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CommonModule,
    CabeceraComponent,
  SaludaComponent
  ]
})
export class ComponentesModule { }
