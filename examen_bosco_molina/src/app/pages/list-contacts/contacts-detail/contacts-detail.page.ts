import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { contact } from 'src/app/modelo/modelo-data-contacts.modelo';
@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.page.html',
  styleUrls: ['./contacts-detail.page.scss'],
})
export class ContactsDetailPage implements OnInit {
public contacto: contact | undefined;
  constructor(private _cs:ContactsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap = {
 this.contacto= JSON.parse(paramMap.get('contact'));
 console.log(this.contacto)
  
  }
    )

}
}

