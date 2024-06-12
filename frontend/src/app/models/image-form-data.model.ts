// Represents the form data sent when uploading a new image.

export interface ImageFormData extends FormData {
  title: string;
  image: File;
}
