import { Component } from '@angular/core';
import { PhotosService } from './photos.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photos: any;
  title: string ="Listado de Imágenes"
  constructor(private _photosService: PhotosService) {}
  ngOnInit() {
    this._photosService.getPhotos().subscribe(data=>
      {
        console.log(data);
        this.photos=data;
      })
  }

}
