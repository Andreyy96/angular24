import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCommentsPageComponent } from './pages/post-comments-page/post-comments-page.component';
import { PostComponent } from './components/post/post.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';


@NgModule({
  declarations: [
    PostsPageComponent,
    PostCommentsComponent,
    PostsComponent,
    PostCommentsPageComponent,
    PostComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
