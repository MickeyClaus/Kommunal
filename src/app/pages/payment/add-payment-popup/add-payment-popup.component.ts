import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { BackendApiSevice } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-add-payment-popup',
  templateUrl: './add-payment-popup.component.html',
  styleUrls: ['./add-payment-popup.component.scss']
})
export class AddPaymentPopupComponent {
  public subscriberDDL: any[] = [];
  public subscriberId = '-1';
  public contractsDDL: any[] = [];
  public contractId = '-1';
  public startDate: any;
  public amount = 0;

  constructor(
    private toast: NgToastService,
    private backendService: BackendApiSevice,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getSubscribers();
    this.getContracts();
    if (this.data.id) {
      this.getData();

    }
  }

  getSubscribers(): void {
    this.backendService.subscriberGetAll().subscribe((res: any) => {
      this.subscriberDDL = res.data;
    });
  }

  getContracts(): void {
    this.backendService.contractGetAll().subscribe((res: any) => {
      this.contractsDDL = res.data;
    });
  }

  public getData(): void {
    this.backendService.paymentGetById(+this.data.id).subscribe((res: any) => {
      this.subscriberId = res.data.subscriber.id;
      this.contractId = res.data.contract.id;
      this.startDate = res.data.date;
      this.amount = res.data.amount;


    }, error => {
    });
  }


  public onSubmit(): void {
    if (this.data.id) {
      this.editCons();
    } else {
      this.createCons();
    }
  }


  public createCons(): void {
    this.backendService.paymentAdd({
      id: 0,
      subscriberId: +this.subscriberId,
      contractId: +this.contractId,
      date: this.startDate,
      amount: +this.amount

    }).subscribe((res: any) => {
      this.dialog.closeAll();
      this.toast.success({ detail: "UĞUR", summary: 'Məsul Şəxs uğurla əlavə olundu !', duration: 5000 });

    }, error => {
    });
  }

  public editCons(): void {
    this.backendService.paymentUpdate({
      id: this.data.id,
      subscriberId: +this.subscriberId,
      contractId: +this.contractId,
      date: this.startDate,
      amount: +this.amount
    }).subscribe((res: any) => {
      this.dialog.closeAll();
      this.toast.success({ detail: "UĞUR", summary: 'Məsul Şəxs uğurla əlavə olundu !', duration: 5000 });

    }, error => {
    });
  }




  public closeDialog(): void {
    this.dialog.closeAll();
  }
}
