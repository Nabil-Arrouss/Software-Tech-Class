// Service to manage authentication operations (login, registration, logout) via API calls.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthCredentials } from "../models/auth-credentials.model";
import { UserRegister } from "../models/user-register.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly API_URL = environment.apiURL;

  constructor(private http: HttpClient) {}

  // Performs user login with provided credentials and returns session details.
  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  // Registers a new user with provided details.
  register(user: UserRegister): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, user);
  }

  // Logs out the current user by terminating the session on the server.
  logout(): Observable<any> {
    return this.http.delete(`${this.API_URL}/logout`);
  }
}
