// Component responsible for displaying detailed information about an image.

import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Image } from "src/app/models/image.model";

@Component({
  selector: "app-image-info",
  templateUrl: "./image-info.component.html",
  styleUrls: ["./image-info.component.scss"],
})
export class ImageInfoComponent {
  @Input()
  image!: Image; // Input property to receive the image data from a parent component.

  // Constructor with injected NgbActiveModal service to manage this modal component.
  constructor(public activeModal: NgbActiveModal) {}
}
