import { Component, OnInit } from '@angular/core';
import { contact_full } from 'src/app/modelo/modelo-support.model';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.page.html',
  styleUrls: ['./list-contacts.page.scss'],
})
export class ListContactsPage implements OnInit {
  contacts: contact_full={page:0, per_page:0, total:0, total_pages:0, data:[], support:[]}
  titulo: string="Lista de contactos"
  constructor( private _cs: ContactsService) { }

  ngOnInit() {
    this._cs.get_contacts().subscribe(data=>
      {
        this.contacts=data;
        this.contacts=this.contacts;
      })
  }



/*
  get_contacts() {
    this._cs.get_contacts().subscribe(data=>
      {
        this.contacts=data;
        this.contacts=this.contacts.data;
      })
  } */
}
