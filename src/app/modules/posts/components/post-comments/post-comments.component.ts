import {Component, OnInit} from '@angular/core';
import {IComment} from "../../interfaces/comment.interface";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css'
})
export class PostCommentsComponent implements OnInit{
  comments: IComment[]

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getByIdComments(id).subscribe(value => this.comments = value)
    })
  }

}
