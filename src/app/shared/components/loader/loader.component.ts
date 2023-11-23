import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/app/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterContentChecked {


  constructor(public loaderService: LoaderService, private cdRef: ChangeDetectorRef) { }


  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }
}
