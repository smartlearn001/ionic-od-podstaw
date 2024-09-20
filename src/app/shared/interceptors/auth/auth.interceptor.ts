import {
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
  } from "@angular/common/http";
  import { Observable, from, throwError } from "rxjs";
  import { Injectable } from "@angular/core";
  import { catchError, switchMap } from "rxjs/operators";
  import { Storage } from '@ionic/storage-angular';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private storage: Storage
    ) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return from(this.addAuthHeader(req)).pipe(
        switchMap((changedRequest: HttpRequest<any>) => {
          return next.handle(changedRequest);
        }),
        catchError((error) => {
          return this.handleResponseError(error);
        })
      );
    }
  
    private async addAuthHeader(req: HttpRequest<any>): Promise<HttpRequest<any>> {
      let changedRequest = req;
  
      const headerSettings: { [name: string]: string | string[] } = {};
  
      for (const key of req.headers.keys()) {
        headerSettings[key] = req.headers.getAll(key) as string[];
      }
  
      const tokenString = await this.storage.get("AUTH_TOKEN");
      let token;
  
      if (tokenString) {
        token = JSON.parse(tokenString);
      }
  
      if (token) {
        headerSettings["Authorization"] = "Bearer " + token.access_token;
      }
  
      const newHeader = new HttpHeaders(headerSettings);
  
      changedRequest = req.clone({
        headers: newHeader,
      });
      return changedRequest;
    }
  
    private handleResponseError(
      error: any
    ): Observable<any> {
      return throwError(error);
    }
  }