import { TestBed } from "@angular/core/testing";
import { ImageFormComponent } from "./image-form.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule } from "@angular/forms"; // Import if forms are used in the component
import { ImageService } from "src/app/services/image.service";

describe("ImageFormComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageFormComponent],
      imports: [
        HttpClientTestingModule, // Ensure HttpClient is mocked
        ReactiveFormsModule, // Include if the component uses reactive forms
      ],
      providers: [
        ImageService, // Ensures ImageService can use the HttpClient mock
      ],
    }).compileComponents();
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(ImageFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here to verify form interactions and service integrations
});
