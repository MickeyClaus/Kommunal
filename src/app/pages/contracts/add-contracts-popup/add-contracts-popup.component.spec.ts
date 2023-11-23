import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractsPopupComponent } from './add-contracts-popup.component';

describe('AddContractsPopupComponent', () => {
  let component: AddContractsPopupComponent;
  let fixture: ComponentFixture<AddContractsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContractsPopupComponent]
    });
    fixture = TestBed.createComponent(AddContractsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
