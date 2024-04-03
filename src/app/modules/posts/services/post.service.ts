import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants/urls";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";
import {IComment} from "../interfaces/comment.interface";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts.link)
  }

  getByIdComments(id:number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.posts.byIdComments(id))
  }
}
