import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { IsUserAuthenticatedGuard, IsGuestGuard } from "./auth.guard";
import { TokenService } from "../services/token.service";
import { of } from "rxjs";
import { Component } from "@angular/core";

// DummyComponent for routing purposes in tests
@Component({ template: "" })
class DummyComponent {}

describe("Guards Testing", () => {
  let tokenServiceMock: jasmine.SpyObj<TokenService>;
  let router: Router;

  beforeEach(() => {
    tokenServiceMock = jasmine.createSpyObj("TokenService", [
      "isAuthenticated",
    ]);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: "login", component: DummyComponent },
          { path: "dashboard", component: DummyComponent },
        ]),
      ],
      providers: [
        { provide: TokenService, useValue: tokenServiceMock },
        IsUserAuthenticatedGuard,
        IsGuestGuard,
      ],
      declarations: [DummyComponent],
    });

    router = TestBed.inject(Router);
  });

  describe("IsUserAuthenticatedGuard Tests", () => {
    it("should allow access for authenticated users", () => {
      tokenServiceMock.isAuthenticated.and.returnValue(true);
      const guard = TestBed.inject(IsUserAuthenticatedGuard);
      const route = new ActivatedRouteSnapshot();
      const state = {} as RouterStateSnapshot;
      expect(guard.canActivate(route, state)).toBeTrue();
    });

    it("should redirect unauthenticated users to login page", () => {
      tokenServiceMock.isAuthenticated.and.returnValue(false);
      const guard = TestBed.inject(IsUserAuthenticatedGuard);
      const spy = spyOn(router, "navigateByUrl").and.returnValue(
        Promise.resolve(true)
      );
      const route = new ActivatedRouteSnapshot();
      const state = {} as RouterStateSnapshot;
      expect(guard.canActivate(route, state)).toBeFalse();
      expect(spy).toHaveBeenCalledWith("/login");
    });
  });

  describe("IsGuestGuard Tests", () => {
    it("should allow access for unauthenticated users", () => {
      tokenServiceMock.isAuthenticated.and.returnValue(false);
      const guard = TestBed.inject(IsGuestGuard);
      const route = new ActivatedRouteSnapshot();
      const state = {} as RouterStateSnapshot;
      expect(guard.canActivate(route, state)).toBeTrue();
    });

    it("should redirect authenticated users away from the login page", () => {
      tokenServiceMock.isAuthenticated.and.returnValue(true);
      const guard = TestBed.inject(IsGuestGuard);
      const spy = spyOn(router, "navigateByUrl").and.returnValue(
        Promise.resolve(true)
      );
      const route = new ActivatedRouteSnapshot();
      const state = {} as RouterStateSnapshot;
      expect(guard.canActivate(route, state)).toBeFalse();
      expect(spy).toHaveBeenCalledWith("/dashboard");
    });
  });
});
