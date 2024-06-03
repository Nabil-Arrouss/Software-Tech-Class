import { TestBed } from "@angular/core/testing";
import { ImageComponent } from "./image.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ImageService } from "../../services/image.service";

describe("ImageComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageComponent],
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [ImageService], // Provide the ImageService
    }).compileComponents();
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(ImageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});
