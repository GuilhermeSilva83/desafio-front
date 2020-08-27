import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, public router: Router) {
  }

  canActivate(): boolean {
    var isLoggedIn = this.auth.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
