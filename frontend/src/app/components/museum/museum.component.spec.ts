import { TestBed, async } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing"; // Import HttpClientTestingModule
import { MuseumComponent } from "./museum.component";
import { ImageService } from "src/app/services/image.service";

describe("MuseumComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuseumComponent],
      imports: [HttpClientTestingModule], // Include HttpClientTestingModule in imports
      providers: [ImageService], // Provide the ImageService
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line to ignore unknown elements
    }).compileComponents();
  }));

  it("should create", () => {
    const fixture = TestBed.createComponent(MuseumComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});
