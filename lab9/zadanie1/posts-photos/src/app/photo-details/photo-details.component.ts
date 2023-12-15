import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.css'
})
export class PhotoDetailsComponent implements OnInit{

  photo: any;
  private urlPhotos = "https://jsonplaceholder.typicode.com/photos/"

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.http.get<any>(`https://jsonplaceholder.typicode.com/photos/${id}`).subscribe((res) => {
      this.photo = res;
    });
  }

 

  getPhotoById(id: number): Observable<JSON[]>{
    return this.http.get<any>(this.urlPhotos + id.toString());
  }
}
