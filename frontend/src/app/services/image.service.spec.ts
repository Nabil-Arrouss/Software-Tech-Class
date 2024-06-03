import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ImageService } from "./image.service";
import { AuthService } from "./auth.service";

describe("ImageService", () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbModule],
      providers: [ImageService, AuthService, NgbActiveModal],
    });
    service = TestBed.inject(ImageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
