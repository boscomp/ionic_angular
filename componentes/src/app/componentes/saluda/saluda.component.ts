import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-saluda',
  templateUrl: './saluda.component.html',
  styleUrls: ['./saluda.component.scss'],
})
export class SaludaComponent  implements OnInit {
  
  texto: string="";
  @Output() propagar = new EventEmitter<string>();
  @Input('nombre') nombre:string|undefined;

  propagarhols: string="Propagar";
  mensaje: string="";
  constructor() { }
    procesoPropagar(evento:string){
      alert("Hola, lo que has tecleado en el componente hijo es: "+evento)
    }
  
  ngOnInit() {
    this.texto="Hola "+ this.nombre;
  }
onPropagar(){this.propagar.emit(this.mensaje);}
}
