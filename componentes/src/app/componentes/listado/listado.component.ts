import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent  implements OnInit {
  nombreCiudad: any|string ="";
  @Input('imagen') imagen:string|undefined;

  constructor() { }

  ngOnInit() {
    this.nombreCiudad
  }

}
