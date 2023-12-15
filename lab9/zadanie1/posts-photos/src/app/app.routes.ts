import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'photos/:id', component: PhotoDetailsComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'photos', component: PhotosComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {} 
// RouterModule.forRoot(routes)