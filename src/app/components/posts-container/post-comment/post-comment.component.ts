import {Component, Input} from '@angular/core';
import {IComment} from "../../../interfaces";

@Component({
  selector: 'app-post-comment',
  standalone: true,
  imports: [],
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css'
})
export class PostCommentComponent {
  @Input()
  comment: IComment

}
