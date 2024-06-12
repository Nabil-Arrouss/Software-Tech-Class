// Component for displaying and managing a collection of images, similar to a gallery or museum display.

import { Component, OnInit } from "@angular/core";
import { Image } from "src/app/models/image.model";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-museum",
  templateUrl: "./museum.component.html",
  styleUrls: ["./museum.component.scss"],
})
export class MuseumComponent implements OnInit {
  images: Image[] = [];

  // Constructor injects ImageService to manage image data.
  constructor(private imageService: ImageService) {}

  // Lifecycle hook that is called after Angular has initialized the component.
  ngOnInit(): void {
    // Fetches all images from the server when the component initializes and stores them in the `images` array.
    this.imageService
      .getAllImages()
      .subscribe((response) => (this.images = response));
  }

  // Event handler for when a new image is saved and needs to be displayed.
  onSavedImage(image: Image): void {
    this.images.unshift(image); // Adds the new image to the beginning of the images array.
    console.log(this.images);
  }

  // Event handler for when an image is deleted.
  onDeletedImage(imageId: number): void {
    const index = this.images.findIndex((image) => image.id === imageId); // Finds the index of the image with the given ID.

    // Checks if the image was found and Removes the image from the array if found
    if (index !== -1) {
      this.images.splice(index, 1);
    }
  }
}
