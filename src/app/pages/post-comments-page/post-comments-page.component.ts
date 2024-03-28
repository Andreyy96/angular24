import { Component } from '@angular/core';
import {PostCommentsComponent} from "../../components/posts-container/post-comments/post-comments.component";

@Component({
  selector: 'app-post-comments-page',
  standalone: true,
  imports: [
    PostCommentsComponent
  ],
  templateUrl: './post-comments-page.component.html',
  styleUrl: './post-comments-page.component.css'
})
export class PostCommentsPageComponent {

}
