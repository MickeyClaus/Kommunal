import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackendApiSevice } from 'src/app/services/backend-api.service';
import { AddContractsPopupComponent } from './add-contracts-popup/add-contracts-popup.component';
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
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  public contractName = '';
  public startDate: any;
  public endDate:any;
  public serviceDDL: any[] = [];
  public serviceId = '-1';
  public subscriberDDL: any[] = [];
  public subscriberId = '-1';
  public conClauseDDL: any[] = [];
  public conClauseId = '-1';
  
  displayedColumns: string[] = ['position', 'name', 'startDate', 'endDate', 'curator', 'sub', 'servis', 'contract', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private backendService: BackendApiSevice,    private dialog: MatDialog,   private toast: NgToastService  ) { }


  ngOnInit(): void {
    this.getContracts();
  }

  public getContracts(): void {
    this.backendService.contractGetAll().subscribe((res: any) => {
      this.dataSource = res.data;
    });
  }

  public openPopup(id:number): void {
    const dialog = this.dialog.open(AddContractsPopupComponent, {
      data: { id:id },
      panelClass: 'adminPopup',
      minWidth: 590 + 'px',
      minHeight: 250 + 'px',
    });
    dialog.afterClosed().subscribe(() => {
      this.getContracts();
    });
  }


  deleteContract(id: number) {
    this.backendService.contractDelete(id).subscribe((res: any) => {
      this.toast.success({
        detail:"UĞUR",
        summary: 'Müqavilə uğurla silindi',
        duration: 5000,
      });
      this.getContracts();
    });


  }

}
