import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MaterialModule } from './material.module';
import { LoaderComponent } from './components/loader/loader.component';





@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        CommonModule,
    ]
})
export class SharedModule {}
