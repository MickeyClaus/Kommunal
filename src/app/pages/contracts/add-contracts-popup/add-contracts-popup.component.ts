import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { BackendApiSevice } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-add-contracts-popup',
  templateUrl: './add-contracts-popup.component.html',
  styleUrls: ['./add-contracts-popup.component.scss']
})
export class AddContractsPopupComponent {
  public contractName = '';
  public startDate: any;
  public endDate:any;
  public serviceDDL: any[] = [];
  public serviceId = '-1';
  public subscriberDDL: any[] = [];
  public subscriberId = '-1';
  public conClauseDDL: any[] = [];
  public conClauseId = '-1';


  constructor(
    private toast: NgToastService,
    private backendService: BackendApiSevice,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getSubscribers();
    this.getClauses();
    this.getServices();
    if (this.data.id) {
    this.getData();
    }
  }

  getSubscribers(): void {
    this.backendService.subscriberGetAll().subscribe((res: any) => {
      this.subscriberDDL = res.data;
    });
  }

  getClauses(): void {
    this.backendService.contractClauseGetAll().subscribe((res: any) => {
      this.conClauseDDL = res.data;
    });
  }

  getServices(): void {
    this.backendService.serviceGetAll().subscribe((res: any) => {
      this.serviceDDL = res.data;
    });
  }



  public getData(): void {
    this.backendService.contractGetById(this.data.id).subscribe((res: any) => {
      this.contractName = res.data.name;
      this.startDate = res.data.startDate;
      this.endDate = res.data.endDate;
      this.subscriberId = res.data.subscriber.id;
      this.conClauseId = res.data.contractClause.id;
      this.serviceId = res.data.service.id;

    
    }, error => {
    });
  }


  public  onSubmit(): void {
    if (this.data.id) {
     this.editCons();
    }else{
      this.createCons();
    }
  }


  public createCons(): void {
    this.backendService.contractAdd({
      id: 0,
      name: this.contractName,
      startDate: this.startDate,
      endDate: this.endDate,
      curatorId: localStorage.getItem('userId'),
      subscriberId: +this.subscriberId,
      serviceId: this.serviceId,
      isActive: 0,
      contractClauseId: +this.conClauseId
    }).subscribe((res: any) => {
      this.dialog.closeAll();
      this.toast.success({detail:"UĞUR",summary:'Müqavilə uğurla əlavə olundu !',duration:5000});

    }, error => {
    });
  }

  public editCons(): void {
    this.backendService.contractUpdate({
      id: +this.data.id,
      name: this.contractName,
      startDate: this.startDate,
      endDate: this.endDate,
      curatorId: localStorage.getItem('userId'),
      subscriberId: +this.subscriberId,
      serviceId: this.serviceId,
      isActive: 0,
      contractClauseId: +this.conClauseId
    }).subscribe((res: any) => {
      this.dialog.closeAll();
      this.toast.success({detail:"UĞUR",summary:'Konstruktor uğurla əlavə olundu !',duration:5000});

    }, error => {
    });
  }




  public closeDialog(): void {
    this.dialog.closeAll();
  }

}
