import { TestBed } from "@angular/core/testing";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ImageInfoComponent } from "./image-info.component";

describe("ImageInfoComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageInfoComponent],
      imports: [NgbModule], // NgbModule or at least provide NgbActiveModal
      providers: [NgbActiveModal], // Provide NgbActiveModal if not importing NgbModule
    }).compileComponents();
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(ImageInfoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Add additional tests as needed
});
