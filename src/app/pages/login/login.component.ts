import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiSevice } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  name: string = '';
  password: string = '';

  constructor(
    private backendService: BackendApiSevice,
    private router: Router
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate([`/contracts`]);
    }
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('aaa');

  }


  onLogin(): void {
    // this.isLoading = true;
    // this.error = '';
    this.backendService.login({ 
      userName: this.name,
      password: this.password,
     }
      ).subscribe((resp: any) => {
      console.log(resp.data);
      if (resp.data.token) {
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('userId', resp.data.id);

        localStorage.setItem('fullName', resp.data.fullName);
        this.router.navigate(['/contracts']);
        // this.isLoading = false;
      } else {
        // this.notifyService.showError(resp.errorMessage, '');
        // this.error = resp.errorMessage;
        // this.isLoading = false;
      }
    }, error => {
    });
  }
}
