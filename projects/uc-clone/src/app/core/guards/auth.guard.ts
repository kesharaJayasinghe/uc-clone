import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userRole: number = 0;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
    this.userRole = Number(this.authService.userRoleVal())
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn === true && this.userRole === 2) {
      return true;
    } else {
      this.router.navigate(['']);
      window.alert('You don\'t have permission to view this page!');
      return false;
    }
  }

}
