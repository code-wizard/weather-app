/**
 * Created by ebuka on 02/10/2018.
 */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable()
export class DomainInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const url = "http://ibank.ng:8003";
    const url = environment.domain;
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}
