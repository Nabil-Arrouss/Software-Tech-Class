// Import necessary modules and services for the test
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthService } from "./auth.service";
import { ImageService } from "./image.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";


// Describe block for the AuthService test suite
describe("AuthService", () => {
  // Before each test, configure the testing module
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, ImageService, NgbActiveModal],
    });
  });

// Test case to check if the AuthService is created successfully
  it("should be created", () => {
    // Inject the AuthService using TestBed
    const service: AuthService = TestBed.inject(AuthService);
    // Expect the service to be truthy, meaning it should be instantiated correctly
    expect(service).toBeTruthy();
  });
});
