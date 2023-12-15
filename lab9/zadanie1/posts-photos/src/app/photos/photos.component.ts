import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit{
  
  photos: any[] = []

  constructor(private service: PostsService){}

  ngOnInit(): void {
    this.service.getPhotos().subscribe(res => this.photos=res);
  }

}
