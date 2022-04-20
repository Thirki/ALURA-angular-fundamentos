import { Component, OnInit } from '@angular/core';
import { IPhoto } from './photos/photo/interface/photo.interface';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  photos: IPhoto[];
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
  }
}
