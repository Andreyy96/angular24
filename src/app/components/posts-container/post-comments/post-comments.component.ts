import {Component} from '@angular/core';
import {IComment} from "../../../interfaces";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {PostCommentComponent} from "../post-comment/post-comment.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [
    PostCommentComponent,
    NgForOf
  ],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css'
})
export class PostCommentsComponent{
  comments: IComment[]

  constructor(private postService:PostService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getCommentsByPostId(id).subscribe(value => this.comments = value)

      if (!this.comments) {
        this.postService.getCommentsByPostId(id).subscribe(value => this.comments =  value)
      }
    })
  }




}
