import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(): boolean {
    if (!localStorage.getItem("token")) {
      this.router.navigate(['authentication/login']);
      return false;
    }
    return true;
  }
}
