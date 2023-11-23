import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {


  constructor(private router: Router){

    }

    isLogin() {

      return this.router.url === '/login';
  
    }

    logOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      this.router.navigate(['/login']);
    }
}
