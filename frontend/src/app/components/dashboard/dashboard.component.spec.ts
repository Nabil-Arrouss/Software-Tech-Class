import { TestBed } from "@angular/core/testing";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthService } from "src/app/services/auth.service";

describe("DashboardComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule], // Ensure HttpClientTestingModule is imported
      providers: [AuthService], // Providing AuthService which might depend on HttpClient
    }).compileComponents();
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Additional tests for the DashboardComponent
});
