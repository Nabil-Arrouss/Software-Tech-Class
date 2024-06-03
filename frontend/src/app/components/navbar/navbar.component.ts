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

  get isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.tokenService.revokeToken();
      this.router.navigateByUrl("/login");
    });
  }
}
