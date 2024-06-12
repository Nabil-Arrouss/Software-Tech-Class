// Guards to manage access based on user authentication status.

import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

// Guard to check if the user is authenticated; if not, redirect to the login page.
@Injectable({
  providedIn: "root",
})
export class IsUserAuthenticatedGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.tokenService.isAuthenticated()) {
      return true; // Allow access if authenticated.
    }
    this.router.navigateByUrl("/login");
    return false; // Redirect if not authenticated
  }
}

// Guard to ensure that authenticated users do not access guest-specific routes like login.
@Injectable({
  providedIn: "root",
})
export class IsGuestGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.tokenService.isAuthenticated()) {
      return true; // Allow access if not authenticated.
    }
    this.router.navigateByUrl("/dashboard");
    return false; // Redirect authenticated users.
  }
}
