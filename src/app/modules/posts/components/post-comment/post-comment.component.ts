import {Component, Input} from '@angular/core';
import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css'
})
export class PostCommentComponent {
  @Input()
  comment: IComment

}
