// This interceptor is used to attach the JWT token to HTTP requests if the user is authenticated.

import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

@Injectable({ providedIn: "root" }) // Ensure this line is correctly set
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.isAuthenticated()) {
      // Check if the user is authenticated.
      const token = this.tokenService.getToken(); // Retrieve the authentication token.
      request = request.clone({
        // Clone the request to modify it
        setHeaders: {
          // Set the Authorization header to include the JWT token.
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request); // Forward the request to the next handler in the chain.
  }
}
