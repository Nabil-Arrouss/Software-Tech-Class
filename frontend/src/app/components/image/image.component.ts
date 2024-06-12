// Component responsible for displaying a single image and providing interactions like viewing details and deleting the image.

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Image } from "src/app/models/image.model";
import { ImageService } from "src/app/services/image.service";
import { ImageInfoComponent } from "../image-info/image-info.component";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent {
  isLoading: boolean = true; // Flag to track the loading state of the image

  @Input()
  image!: Image; // Input property to receive image data from a parent component.

  @Output()
  deletedImage: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private imageService: ImageService,
    private modelService: NgbModal
  ) {}

  onLoad(): void {
    this.isLoading = false; // Marks the image as loaded, used to control loading indicators.
  }

  openImageInfo(): void {
    // Opens a modal dialog to display detailed information about the image.
    const modalRef = this.modelService.open(ImageInfoComponent, { size: "lg" });
    modalRef.componentInstance.image = this.image; // Passes the image data to the modal component.
  }

  deleteImage(): void {
    // Calls the ImageService to delete the image by its ID.
    this.imageService.deleteImage(this.image.id).subscribe(
      (response) => this.handleResponse(response), // Handles successful deletion.
      (errors) => console.log(errors)
    );
  }

  private handleResponse(response: any): void {
    // Emits the ID of the deleted image to the parent component.
    this.deletedImage.emit(this.image.id);
  }
}
