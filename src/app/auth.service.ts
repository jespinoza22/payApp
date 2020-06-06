import { Injectable } from '@angular/core';
import { Auth0Client } from '@auth0/auth0-spa-js';
// import createAuth0Client from '@auth0/auth0-spa-js';
// import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
// import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private userProfileSubject$ = new BehaviorSubject<any>(null);
  // userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;
  userProfile: any;
  accesToken: any = null;

  auth0: Auth0Client = new Auth0Client({
      domain: 'dev-wjxvxmxl.auth0.com',
      client_id: 'NRGNxmLKD9w7dpY5V0P63zP3PQ10d0G9',
      redirect_uri: `${window.location.origin}/home`,
      audience: 'https://payApplication.com/api',
      response_type: 'openid token',
      scope: 'read:messages'
  });

  isAuthenticated$: any;


  constructor(private router: Router) {
    // this.isAuthenticated$ = this.auth0.isAuthenticated().then(resultt => {
    //   this.loggedIn = resultt;
    //   return this.loggedIn;
    // });

    this.handleAuthCallback();
  }

  private handleAuthCallback() {
    const params = window.location.search;
    console.log(params, 'params');
    if (params.includes('code=') && params.includes('state=')) {
      console.log(params, 'handleRedirectCallback');
      this.auth0.handleRedirectCallback().then(redirectResult => {
        this.auth0.getUser().then(user => {
          this.userProfile = user;
          console.log(user, 'user');
        });
        this.auth0.isAuthenticated().then(value => {
          this.loggedIn = value;
        });
      });
    }
  }


  async login(redirectPath: string = '/') {
    this.auth0.loginWithRedirect({
      redirect_uri: `${window.location.origin}/home`,
      // appState: { target: redirectPath }
    }).then(token => {
      this.auth0.getUser().then(user => {
        console.log(user, 'user');
      });
      console.log(token, 'token');
    });
  }

  logout() {
    this.auth0.logout({
      client_id: 'NRGNxmLKD9w7dpY5V0P63zP3PQ10d0G9',
      returnTo: `${window.location.origin}`
    });
  }

  getTokenSilently(options?) {
    return this.auth0.getTokenSilently();
  }
}