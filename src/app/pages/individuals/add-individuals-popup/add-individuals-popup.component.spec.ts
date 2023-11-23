import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndividualsPopupComponent } from './add-individuals-popup.component';

describe('AddIndividualsPopupComponent', () => {
  let component: AddIndividualsPopupComponent;
  let fixture: ComponentFixture<AddIndividualsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIndividualsPopupComponent]
    });
    fixture = TestBed.createComponent(AddIndividualsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
