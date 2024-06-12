// Service responsible for managing JWT tokens in the application's local storage.

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  // Stores a JWT token in local storage.
  handleToken(token: string): void {
    localStorage.setItem("access_token", token);
  }

  // Retrieves the JWT token from local storage.
  getToken(): string | null {
    return localStorage.getItem("access_token");
  }

  // Removes the JWT token from local storage, effectively "logging out" the user.
  revokeToken(): void {
    localStorage.removeItem("access_token");
  }

  // Checks if a JWT token is present in local storage and returns a boolean.
  isAuthenticated(): boolean {
    if (this.getToken()) return true;

    return false;
  }
}
