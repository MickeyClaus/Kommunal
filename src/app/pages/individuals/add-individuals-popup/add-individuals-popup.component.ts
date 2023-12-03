import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { BackendApiSevice } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-add-individuals-popup',
  templateUrl: './add-individuals-popup.component.html',
  styleUrls: ['./add-individuals-popup.component.scss']
})
export class AddIndividualsPopupComponent implements OnInit {
  public name = '';
  public code = '';
  public type = 0;



  constructor(
    private toast: NgToastService,
    private backendService: BackendApiSevice,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id) {
      this.getData();
    
    }
  }

  public getData(): void {
    this.backendService.subscriberGetById(+this.data.id).subscribe((res: any) => {
      this.name = res.data.name;
      this.code = res.data.code;
      this.type = res.data.type.toString();
      
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
    this.backendService.subscriberAdd({
      id: 0,
      name: this.name,
      code: this.code,
      type: +this.type
    }).subscribe((res: any) => {
      this.dialog.closeAll();
      this.toast.success({detail:"UĞUR",summary:'Məsul Şəxs uğurla əlavə olundu !',duration:5000});

    }, error => {
    });
  }

  public editCons(): void {
    this.backendService.subscriberUpdate({
      id: this.data.id,
      name: this.name,
      code: this.code,
      type: +this.type
    }).subscribe((res: any) => {
      this.dialog.closeAll();
      this.toast.success({detail:"UĞUR",summary:'Məsul Şəxs uğurla əlavə olundu !',duration:5000});

    }, error => {
    });
  }




  public closeDialog(): void {
    this.dialog.closeAll();
  }
}
