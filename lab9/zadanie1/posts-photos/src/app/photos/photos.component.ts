import { Component, OnInit } from '@angular/core';
// import { PostsService } from '../posts.service';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photos',  
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit{
  
  photos: any[] = [];
  private urlPhotos = "https://jsonplaceholder.typicode.com/photos"

  // constructor(private service: PostsService){}
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPhotos().subscribe(res => this.photos=res.slice(0, 20));
    // this.photos = this.photos.slice(0, 20);
  }
  getPhotos(): Observable<any>{
    return this.http.get<any>(this.urlPhotos);
  }

}
