import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Image } from 'src/app/models/image.model';



@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss']
})
export class ImageInfoComponent {
  @Input()
  image!: Image;

  constructor(public activeModal: NgbActiveModal) {}
}
