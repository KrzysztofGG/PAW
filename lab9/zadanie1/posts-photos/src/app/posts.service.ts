import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private urlPosts = "https://jsonplaceholder.typicode.com/posts"
  private urlPhotos = "https://jsonplaceholder.typicode.com/photos"
  constructor(private http: HttpClient) { }

  getPosts(): Observable<JSON[]>{
    return this.http.get<JSON[]>(this.urlPosts);
  }

  getPhotos(): Observable<JSON[]>{
    return this.http.get<JSON[]>(this.urlPhotos);
  }

  getPhotoById(id: number): Observable<JSON[]>{
    return this.http.get<any>(this.urlPhotos + id.toString());
  }

  postPhoto(body: string): Observable<any>{
    return this.http.post<any>(this.urlPhotos, body, httpOptions);
  }

}
