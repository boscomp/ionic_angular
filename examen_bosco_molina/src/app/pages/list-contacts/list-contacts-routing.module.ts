import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContactsPage } from './list-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ListContactsPage
  },  {
    path: 'contacts-detail',
    loadChildren: () => import('./contacts-detail/contacts-detail.module').then( m => m.ContactsDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListContactsPageRoutingModule {}
