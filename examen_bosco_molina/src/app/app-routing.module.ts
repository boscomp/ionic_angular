import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'list-contacts',
    pathMatch: 'full'
  },
  {
    path: 'list-contacts',
    children:
    [
      {
        path: "",
        loadChildren: () => import('./pages/list-contacts/list-contacts.module').then( m => m.ListContactsPageModule)
      },
      {
        path: ":contact",
        loadChildren: () => import('./pages/list-contacts/contacts-detail/contacts-detail.module').then( m => m.ContactsDetailPageModule)

      }
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
