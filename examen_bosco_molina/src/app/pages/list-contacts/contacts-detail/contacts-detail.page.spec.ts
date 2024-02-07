import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsDetailPage } from './contacts-detail.page';

describe('ContactsDetailPage', () => {
  let component: ContactsDetailPage;
  let fixture: ComponentFixture<ContactsDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
