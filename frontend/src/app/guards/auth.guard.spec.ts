// Test suite for the authentication-related guards in the application.

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

  // Setup the TokenService mock and configure testing module with routing and guards.
  beforeEach(() => {
    tokenServiceMock = jasmine.createSpyObj("TokenService", [
      "isAuthenticated",
    ]);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          // Setup routing for test environment with dummy routes.
          { path: "login", component: DummyComponent },
          { path: "dashboard", component: DummyComponent },
        ]),
      ],
      providers: [
        { provide: TokenService, useValue: tokenServiceMock }, // Provide the mock service in place of the real TokenService.
        IsUserAuthenticatedGuard,
        IsGuestGuard,
      ],
      declarations: [DummyComponent], // Declare dummy components used in routing
    });

    router = TestBed.inject(Router); // Inject router service to be used in the test cases.
  });

  describe("IsUserAuthenticatedGuard Tests", () => {
    it("should allow access for authenticated users", () => {
      tokenServiceMock.isAuthenticated.and.returnValue(true); // Set isAuthenticated to return true.
      const guard = TestBed.inject(IsUserAuthenticatedGuard);
      const route = new ActivatedRouteSnapshot(); // Create a new instance of ActivatedRouteSnapshot.
      const state = {} as RouterStateSnapshot; // Create a mock RouterStateSnapshot.
      expect(guard.canActivate(route, state)).toBeTrue(); // Expect the guard to allow access.
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
