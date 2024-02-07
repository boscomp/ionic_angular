import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { contact } from '../modelo/modelo-data-contacts.modelo';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = 'https://reqres.in/api/users?page=2'
  public contacts: any;
  public contacto: contact | undefined;
  constructor(private http: HttpClient, private router:Router) { }

 /**
   * view_Contact
   * @param contact: para ver detalle
   */
 view_Contact(contact: any) {
  contact
  this.router.navigate(['/list-contacts/contact-detail', {contact: JSON.stringify(contact)}]);
}
  get_contacts() {
    return this.http.get(this.url);
  }
}
