import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
// import { isatty } from 'tty';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
  //   return this.auth.isAuthenticated$.pipe(
  //     tap(loggedIn => {
  //       if (!loggedIn) {
  //         this.auth.login(state.url);
  //       }
  //     })
  //   );
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
    const isAuten = this.auth.loggedIn;
    if (!isAuten) {
      this.auth.login(state.url);
    }
    return isAuten;
  }

}