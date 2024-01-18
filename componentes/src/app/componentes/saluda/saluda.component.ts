import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saluda',
  templateUrl: './saluda.component.html',
  styleUrls: ['./saluda.component.scss'],
})
export class SaludaComponent  implements OnInit {
  
  texto: string="";
  @Input('nombre') nombre:string|undefined;
  constructor() { 
    
  }

  ngOnInit() {
    this.texto="Hola "+ this.nombre;
  }

}
