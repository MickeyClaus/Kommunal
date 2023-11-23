import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { BackendApiSevice } from 'src/app/services/backend-api.service';
import { AddPaymentPopupComponent } from './add-payment-popup/add-payment-popup.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  displayedColumns: string[] = ['position', 'subscriber', 'contract', 'date','cost', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private backendService: BackendApiSevice, private dialog: MatDialog, private toast: NgToastService) { }


  ngOnInit(): void {
    this.getContracts();
  }

  public getContracts(): void {
    this.backendService.paymentGetAll().subscribe((res: any) => {
      this.dataSource = res.data;
    });
  }

  public openPopup(id: number): void {
    const dialog = this.dialog.open(AddPaymentPopupComponent, {
      data: { id: id },
      panelClass: 'adminPopup',
      minWidth: 590 + 'px',
      minHeight: 250 + 'px',
    });
    dialog.afterClosed().subscribe(() => {
      this.getContracts();
    });
  }

  deletePayment(id: number) {
    this.backendService.paymentDelete(id).subscribe((res: any) => {
      this.toast.success({
        detail: '',
        summary: 'Ödəniş uğurla silindi',
        duration: 5000,
      });
      this.getContracts();
    });


  }
}
