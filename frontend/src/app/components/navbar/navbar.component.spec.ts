import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NavbarComponent } from "./navbar.component";
import { AuthService } from "src/app/services/auth.service";

describe("NavbarComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule], // This will provide the HttpClient dependency
      providers: [AuthService], // Ensures AuthService is available, which depends on HttpClient
    }).compileComponents();
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});
