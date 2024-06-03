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
    this.loginForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  ngOnInit(): void {
    // Initialize anything you need when the component is loaded
  }

  closeModal(): void {
    $(this.loginModal.nativeElement).modal("hide");
  }

  onSubmit(): void {
    this.cleanErrors();
    this.authService.login(this.loginForm.value).subscribe(
      (response) => this.handleResponse(response),
      (errors) => this.handleErrors(errors)
    );
  }

  private handleResponse(response: any): void {
    console.log(response.message);
    this.tokenService.handleToken(response.token);
    this.router.navigateByUrl("/dashboard");
  }

  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    console.log(this.errors);
  }

  private cleanErrors(): void {
    this.errors = null;
  }
}
