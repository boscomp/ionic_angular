import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string="Bosco"
  usuarios:any = [
    {
      nombre:'Bosco',
      edad:25
    },
    {
      nombre:'Eduardo',
      edad:37
    },
    {
      nombre:'Pedro',
      edad:22
    },
    {
      nombre:'Francisco',
      edad:28
    }
  ]
  nombreCiudad:string="Sevilla"
  constructor() {}

}
