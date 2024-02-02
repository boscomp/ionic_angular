import { Injectable } from '@angular/core';
import { ServiceNamesService } from '../service-names.service';
import { Observable } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  // Variable para montar url de forma dinámica
  url: string=''
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param email : Dirección de correo usuario
   * @param pwd : password del usuario
   * @returns Devuelve el código de vuelta del servicio "200-login correcto"
   */
  login(email:string, pwd: string): Observable<any> {
    const headers = new HttpHeaders({
      'name': 'User-Agent',
      'value': 'insomnia/8.4.1'
    });

    //Montamos la dirección de la url del servicio completo con 
    // los parámetros de entrada:
    this.url= ServiceNamesService.LOGIN_SERVICE+"?email="+email
    +"&password="+pwd;

    return this.http.get(this.url, {headers})
  }
}
