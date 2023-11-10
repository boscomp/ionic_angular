import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import {place} from './place.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
 

titulo: string = "LUGARES DEL MUNDO"
//Se define una variable pública del tipo "place" nuestra interface y se inicializa.
places: place[]=[];

  //Construtor en el que se ponen las variables que vamos a instanciar para poder acceder a las clases que hayamos importado.
  constructor(private placeService : PlacesService, private router: Router) { }

  //Método que se llama cada vez que entra en esta página:
  ngOnInit() {
    this.places=this.placeService.getPlaces(); // llamamos al método que devuelve el listado de lugares completo
  }
/*
* ionViewWillEnter
* se llama cada vez que entre en la pagina
*/

ionViewWillEnter() {
  this.places=this.placeService.getPlaces();
}
newPlace() {
  this.router.navigate(['/new-place'])
}

goToHome() {
  this.router.navigate(['home'])
}
}
