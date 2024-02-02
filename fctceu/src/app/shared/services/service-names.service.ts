import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceNamesService {
//DEFINICIÓN SERVICIO DE LOGIN:
public static readonly LOGIN_SERVICE: string = `$(environment.apiURL)`+'login';
  constructor() { }
}
