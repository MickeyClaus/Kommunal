import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from '../contracts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddContractsPopupComponent } from '../add-contracts-popup/add-contracts-popup.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContractsComponent,
    AddContractsPopupComponent,
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MatDialogModule,
    SharedModule,
    MaterialModule
  ]
})
export class ContractsModule { }
