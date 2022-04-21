import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

import { IPhoto } from '../interface/photo.interface';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
  }
}
