import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NgToastService } from 'ng-angular-popup';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  errorMessage = 'error';

  constructor(private toast: NgToastService, private router: Router) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(0),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0 || error.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('userName');
          this.router.navigate(['/login']);

          this.toast.error({
            detail: 'XƏBƏRDARLIQ',
            summary: error.error.message,
          });



          return throwError(error);
        } else if (error.status === 403) {
          this.toast.error({
            detail: 'XƏTA',
            summary: 'Bu əməliyyat üçün icazəniz yoxdur',
          });
          return throwError(error);
        } else if (error.status === 402) {
          this.toast.error({
            summary: error.error.errors[0],
            detail: ''
          });
          return throwError(error);
        } else if (error.status === 404) {
          this.toast.error({ detail: 'XƏTA', summary: 'Xəta baş verdi' });
          return throwError(error);
        } else if (error.status === 400) {
          if (!this.router.url.includes('/user-registration/3')) {
            if (error.error.errors) {
              this.toast.error({
                detail: 'XƏBƏRDARLIQ',
                summary: error.error.errors[0].message,
                duration: 10000,
              });
            } else if (error.error.message) {
              this.toast.error({
                summary: error.error.message,
                duration: 10000,
                detail: ''
              });
            } else {
              error.error.forEach((element: any) => {
                this.toast.error({ detail: 'XƏTA', summary: element.message });
              });
            }
          }

          return throwError(error);
        } else if (!error.error.messages) {
          this.toast.error({ detail: 'XƏTA', summary: 'Xəta baş verdi' });
          return throwError(error);
        } else if (error.error.message) {
          this.toast.error({ detail: 'XƏTA', summary: error.error.message });
          return throwError(error);
        } else {
          return throwError(error);
        }
      })
    );
  }
}
