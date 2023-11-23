import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { contracts, home, individuals, payment } from './services/app/lazy-loads';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contracts',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: home,
    canActivate: [AuthGuardService],
  },
  {
    path: 'contracts',
    loadChildren: contracts,
    canActivate: [AuthGuardService],
  },
  {
    path: 'individuals',
    loadChildren: individuals,
    canActivate: [AuthGuardService],
  },
  {
    path: 'payment',
    loadChildren: payment,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
