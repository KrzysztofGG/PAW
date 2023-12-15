import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgClass } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'photo/:id', component: PhotoDetailsComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'photos', component: PhotosComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
// RouterModule.forRoot(routes)