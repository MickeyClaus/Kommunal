import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsComponent } from '../individuals.component';
import { AddIndividualsPopupComponent } from '../add-individuals-popup/add-individuals-popup.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    IndividualsComponent,
    AddIndividualsPopupComponent,
  ],
  imports: [
    CommonModule,
    IndividualsRoutingModule,
    MatDialogModule,
    SharedModule,
    MaterialModule
  ]
})
export class IndividualsModule { }
