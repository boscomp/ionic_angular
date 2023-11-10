import { Injectable } from '@angular/core';
import { place } from './place.model'


@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  private places: place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs82eBcP9ttK5yoscHgwD1PsImOi_uRI6szQ&usqp=CAU',
      comments: []

    },
    {
      id: '2',
      title: 'Estatua de la libertad',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCan76xKnQStQwYTKyi8EUl0vXpuiefc-6Ow&usqp=CAU',
      comments: ['Increibles las vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    }

  ]


  constructor() { }


  /**
   * getPlaces()
   * Devuelve el array completo de elementos de places
   */
  getPlaces() {
    return [...this.places]
  }

  /**
   * getPlace() : Recupera el valor del array que se pulse
   * @param placeID (Identificador del objeto que se ha pulsado)
   * @return value: Objeto del tipo modelo de datos "place"
   */
  getPlace(placeID: string | null): place  {
    return {
      ...this.places.find(place => {
        return place.id === placeID
      })
    }
  }


  /**
   * addPlace() Este método añade un objeto nuevo al final del array places
   * @param title  Será el título del objeto.
   * @param imageURL Será la imagen del objeto.
   */
  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: (this.places.length + 1).toString() // se hace la suma secuencial y se convierte a cadena.
    })
  }

  /**
   * deletePlace() Elimina un objeto del array de places
   * @param placeId El id del objeto a eliminar
   */
  deletePlace(placeId: string | undefined) {
    this.places = this.places.filter(place => {
      return place.id != placeId
    })
  }
}
