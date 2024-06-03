import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { AuthInterceptor } from "src/app/interceptors/auth.interceptor";
import { TokenService } from "src/app/services/token.service";

describe("AuthInterceptor", () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        TokenService, // Ensure TokenService is available if used by the interceptor
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    tokenService = TestBed.inject(TokenService); // Assuming TokenService is needed
  });

  it("should add an authorization token", () => {
    spyOn(tokenService, "isAuthenticated").and.returnValue(true);
    spyOn(tokenService, "getToken").and.returnValue("fake-token");

    httpClient.get("/data").subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne("/data");

    expect(httpRequest.request.headers.has("Authorization")).toBeTrue();
    expect(httpRequest.request.headers.get("Authorization")).toBe(
      "Bearer fake-token"
    );

    httpRequest.flush({}); // Simulate a response
    httpMock.verify(); // Ensure no other requests are made
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding.
  });
});
