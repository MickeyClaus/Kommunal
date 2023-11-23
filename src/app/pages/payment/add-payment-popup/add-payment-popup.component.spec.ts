import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentPopupComponent } from './add-payment-popup.component';

describe('AddPaymentPopupComponent', () => {
  let component: AddPaymentPopupComponent;
  let fixture: ComponentFixture<AddPaymentPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaymentPopupComponent]
    });
    fixture = TestBed.createComponent(AddPaymentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
