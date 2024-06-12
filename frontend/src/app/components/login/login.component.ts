// Component for user login functionality.

import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { TokenService } from "src/app/services/token.service";
declare var $: any; // Declare jQuery to use it

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @ViewChild("loginModal") loginModal!: ElementRef;
  loginForm: FormGroup;
  errors: any;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialize the login form with empty default values.
    this.loginForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  ngOnInit(): void {}

  closeModal(): void {
    $(this.loginModal.nativeElement).modal("hide");
  }

  // Method triggered when the user submits the login form.
  onSubmit(): void {
    this.cleanErrors();
    // Clear previous errors before a new submission.
    // Attempt to log in with the credentials from the loginForm.
    this.authService.login(this.loginForm.value).subscribe(
      (response) => this.handleResponse(response),
      (errors) => this.handleErrors(errors)
    );
  }

  // Handles successful login responses.
  private handleResponse(response: any): void {
    console.log(response.message);
    this.tokenService.handleToken(response.token); // Store the received token.
    this.router.navigateByUrl("/dashboard");
  }

  // Handles errors received from the login attempt.
  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    console.log(this.errors);
  }

  // Clears any existing errors in preparation for a new form submission.
  private cleanErrors(): void {
    this.errors = null;
  }
}
