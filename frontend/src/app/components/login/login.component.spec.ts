import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "src/app/services/auth.service";

describe("LoginComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule, // Provides HttpClient mocks
        RouterTestingModule, // If your component uses routing features
      ],
      providers: [
        AuthService, // Ensure AuthService is provided
      ],
    }).compileComponents();
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});
