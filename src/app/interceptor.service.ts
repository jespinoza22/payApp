import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { Observable, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  token: any;
  private userToken = localStorage.getItem('userToken');
  constructor(
    private auth: AuthService
    ) { }

  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   return this.auth.getTokenSilently$().pipe(
  //     mergeMap(token => {
  //       const tokenReq = req.clone({
  //         setHeaders: { Authorization: `Bearer ${token}` }
  //       });
  //       return next.handle(tokenReq);
  //     }),
  //     catchError(err => throwError(err))
  //   );
  // }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Get Auth0 scaffolded
    this.getAuth0Token();
    // If userToken exists, clone the http request and add the userToken as the Bearer token
    // Otherwise grab the token from Auth0
    if ( this.userToken ) {
      const tokenReq: HttpRequest<any> = req.clone( {
        setHeaders: {
          Authorization: `Bearer ${ this.userToken }`
        }
      } );
      return next.handle(tokenReq);
    }
    // catch any errors. Ensure user is logged out if necessary and have them log in
    // return next.handle( req ).do( ( event: HttpEvent<any> ) => { } )
    //   .catch( ( err: any ) => {
    //     console.log( err );
    //     if ( err instanceof HttpErrorResponse && err.status === 401 ) {
    //       this.auth.logout();
    //       this.auth.login();
    //       return Observable.of();
    //     }
    //   } );
  }

  async getAuth0Token() {
    const token = await this.auth.getTokenSilently();
    await this.storeToken(token);
    await this.getToken();
  }

  /**
   * Sets the token in local storage
   */
  async storeToken( token: string ) {
    await localStorage.setItem('userToken', token );
  }
  /**
   * pulls local storage token and sets it in userToken
   */
  async getToken() {
    this.userToken = await localStorage.getItem('userToken');
  }

}