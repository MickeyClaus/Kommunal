import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackendApiSevice } from 'src/app/services/backend-api.service';
import { AddIndividualsPopupComponent } from './add-individuals-popup/add-individuals-popup.component';
import { NgToastService } from 'ng-angular-popup';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent implements OnInit {
  public name = '';
  public code = '';
  public type = 0;
  displayedColumns: string[] = ['position', 'name', 'code', 'type', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private backendService: BackendApiSevice, private dialog: MatDialog, private toast: NgToastService) { }


  ngOnInit(): void {
    this.getContracts();
  }

  public getContracts(): void {
    this.backendService.subscriberGetAll().subscribe((res: any) => {
      this.dataSource = res.data;
    });
  }

  public openPopup(id: number): void {
    const dialog = this.dialog.open(AddIndividualsPopupComponent, {
      data: { id: id },
      panelClass: 'adminPopup',
      minWidth: 590 + 'px',
      minHeight: 250 + 'px',
    });
    dialog.afterClosed().subscribe(() => {
      this.getContracts();
    });
  }

  deleteIndiv(id: number) {
    this.backendService.subscriberDelete(id).subscribe((res: any) => {
      this.toast.success({
        detail:"UĞUR",
        summary: 'Məsul Şəxs uğurla silindi',
        duration: 5000,
      });
      this.getContracts();
    });


  }
}
