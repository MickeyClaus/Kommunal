import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  public canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate([`/login`]);
    return false;
  }
}
