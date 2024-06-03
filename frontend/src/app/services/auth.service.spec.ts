import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthService } from "./auth.service";
import { ImageService } from "./image.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

describe("AuthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, ImageService, NgbActiveModal],
    });
  });

  it("should be created", () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });
});
