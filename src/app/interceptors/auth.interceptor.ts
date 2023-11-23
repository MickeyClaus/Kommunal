import {
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BackendApiSevice } from '../services/backend-api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {



  constructor(private injector: Injector) { }

  intercept(req: any, next: HttpHandler) {
    const backendService = this.injector.get(BackendApiSevice);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${backendService.getToken()}`,
        url: `${window.location.origin}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
