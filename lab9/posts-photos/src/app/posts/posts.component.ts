import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8'
  })
};

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgIf ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  private urlPosts = "https://jsonplaceholder.typicode.com/posts"
  postFormData!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  dataForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
    name: new FormControl('')
  })
  
  ngOnInit(): void {
    this.getPosts().subscribe(res => this.posts=res);
    this.posts = this.posts.slice(0, 20);

    this.postFormData = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.postFormData.valid) {
      const data = {
        title: this.postFormData.value.title,
        body: this.postFormData.value.body,
        userId: 1,
      };

      this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data), httpOptions).subscribe((response) => {
        console.log('Post created:', response);
        // this.posts.splice(0, 0, data)

        this.postFormData.reset();
      });
    }
  }

  getPosts(): Observable<any>{
    return this.http.get<any>(this.urlPosts);
  }
}
