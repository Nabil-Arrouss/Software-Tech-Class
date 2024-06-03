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
      return true;
    }
    this.router.navigateByUrl("/login");
    return false;
  }
}

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
      return true;
    }
    this.router.navigateByUrl("/dashboard");
    return false;
  }
}
