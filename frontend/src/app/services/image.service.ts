// Service to handle API calls related to image operations using HTTP client.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Image } from "../models/image.model";
import { ImageFormData } from "../models/image-form-data.model";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  // Fetches all images from the server.
  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiURL}/images`);
  }

  // Fetches a single image by its ID.
  getOneImage(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiURL}/images/${id}`);
  }

  // Submits a new image to the server.
  saveImage(data: ImageFormData): Observable<Image> {
    return this.http.post<Image>(`${this.apiURL}/images`, data);
  }

  // Deletes an image by its ID.
  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/images/${id}`);
  }
}
