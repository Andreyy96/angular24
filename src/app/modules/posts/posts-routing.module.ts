import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {PostCommentsPageComponent} from "./pages/post-comments-page/post-comments-page.component";

const routes: Routes = [
  {path: "", component:PostsPageComponent, children: [
      {path: ":id/comments", component: PostCommentsPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
