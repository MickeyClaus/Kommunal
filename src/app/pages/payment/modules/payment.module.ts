import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from '../payment.component';
import { AddPaymentPopupComponent } from '../add-payment-popup/add-payment-popup.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PaymentComponent,
    AddPaymentPopupComponent,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatDialogModule,
    SharedModule,
    MaterialModule
  ]
})
export class PaymentModule { }
