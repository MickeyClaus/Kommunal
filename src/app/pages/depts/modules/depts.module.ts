import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeptsRoutingModule } from './depts-routing.module';
import { DeptsComponent } from '../depts.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DeptsComponent
  ],
  imports: [
    CommonModule,
    DeptsRoutingModule,
    MatDialogModule,
    SharedModule,
    MaterialModule
  ]
})
export class DeptsModule { }
