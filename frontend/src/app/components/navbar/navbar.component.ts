// Component responsible for displaying the navigation bar and managing authentication-related UI.

import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { TokenService } from "src/app/services/token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  // Getter method to determine if the user is authenticated by checking the presence of a token.
  get isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  // Method to log out the user. It triggers the logout process in the AuthService.
  logout(): void {
    this.authService.logout().subscribe(() => {
      this.tokenService.revokeToken(); // Clears the authentication token from storage.
      this.router.navigateByUrl("/login");
    });
  }
}
