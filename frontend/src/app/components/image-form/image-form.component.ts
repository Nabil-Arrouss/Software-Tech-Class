// Component responsible for uploading images with titles.

import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ImageFormData } from "src/app/models/image-form-data.model";
import { Image } from "src/app/models/image.model";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"],
})
export class ImageFormComponent {
  imageForm: FormGroup;
  errors: string[] = [];
  responseMessage?: string;

  @ViewChild("inputFile") // Reference to the file input element in the template.
  inputFile!: ElementRef;

  @Output() // Event emitter to notify parent components of a successfully saved image.
  savedImage: EventEmitter<Image> = new EventEmitter<Image>();

  constructor(private fb: FormBuilder, private imageService: ImageService) {
    this.imageForm = this.fb.group({
      title: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const selectedFiles = target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      this.imageForm.patchValue({ image: selectedFiles[0] });
    }
  }

  onSubmit(): void {
    this.cleanResponseMessage();
    this.cleanErrors();

    if (this.imageForm.invalid) {
      this.handleValidationErrors();
      return;
    }

    const formData = new FormData() as ImageFormData; // Creates a new FormData object for HTTP submission.
    formData.append("title", this.imageForm.get("title")?.value);
    formData.append("image", this.imageForm.get("image")?.value);

    // Calls the image service to save the image data.
    this.imageService.saveImage(formData).subscribe(
      (response) => this.handleResponse(response),
      (errors) => this.handleErrors(errors)
    );
  }

  private cleanResponseMessage(): void {
    this.responseMessage = "";
  }

  private cleanErrors(): void {
    this.errors = [];
  }

  private handleResponse(response: any): void {
    this.showSuccessAlert(response.message); // Displays a success message.
    this.resetForm(); // Resets the form after successful submission.
    this.inputFile.nativeElement.value = ""; // Clears the file input.
    this.savedImage.emit(response.data); // Emits the saved image data to the parent component.
  }

  private showSuccessAlert(message: string): void {
    this.responseMessage = message;

    // Hide alert
    setTimeout(() => {
      this.cleanResponseMessage();
    }, 3000);
  }

  private resetForm(): void {
    this.imageForm.reset({
      title: "",
      image: "",
    });
  }

  private handleErrors(errors: any): void {
    for (let error in errors.error.errors) {
      this.errors.push(errors.error.errors[error][0]); // Adds error messages to the errors array.
    }
  }

  private handleValidationErrors(): void {
    // Generates error messages for specific form controls.
    if (this.imageForm.get("title")?.hasError("required")) {
      this.errors.push("The title field is obligatory, please enter a title");
    }
    if (this.imageForm.get("image")?.hasError("required")) {
      this.errors.push("The image filed is obligatory, please upload an image");
    }
  }
}
