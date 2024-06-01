import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.scss']
})

export class MuseumComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) {}
    
  ngOnInit(): void {
      this.imageService.getAllImages().subscribe(
        response => this.images = response
      );
    }
  
  onSavedImage(image: Image): void {
    this.images.unshift(image);
    console.log(this.images);
  }

  onDeletedImage(imageId: number): void {
    const index = this.images.findIndex(image => image.id === imageId);

    if(index !== -1){
      this.images.splice(index, 1);
    }
  }
}
