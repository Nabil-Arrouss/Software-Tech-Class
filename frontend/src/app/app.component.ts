import { Component } from "@angular/core";
import { TokenService } from "src/app/services/token.service"; // Assuming TokenService has the necessary methods

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "frontend";

  constructor(private tokenService: TokenService) {}

  get isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

}
