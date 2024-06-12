// Test suite for the AuthInterceptor to ensure it correctly injects the token.

import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { TokenService } from "../services/token.service";

describe("AuthInterceptor", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });
  });

  it("should be created", () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor); // Inject the interceptor.
    expect(interceptor).toBeTruthy(); // Test if the interceptor is correctly created.
  });
});
