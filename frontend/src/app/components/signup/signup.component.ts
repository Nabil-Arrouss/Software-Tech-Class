// Component for handling user registration.

import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  registerForm: FormGroup;
  errors: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initializing the form with empty default values.
    this.registerForm = this.fb.group({
      name: [""],
      email: [""],
      password: [""],
      password_confirmation: [""],
    });
  }

  // Called when the user submits the form.
  onSubmit(): void {
    this.cleanErrors(); // Clears any previous errors
    // Attempts to register the user using the AuthService.
    this.authService.register(this.registerForm.value).subscribe(
      (response) => this.handleResponse(response),
      (errors) => this.handleErrors(errors)
    );
  }

  // Handles successful registration response.
  private handleResponse(response: any): void {
    console.log(response.message);
    this.router.navigateByUrl("/login");
  }

  // Handles errors during registration.
  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    console.log(this.errors);
  }

  // Clears any stored errors before submitting the form again.
  private cleanErrors(): void {
    this.errors = null;
  }
}
