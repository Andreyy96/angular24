import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user.interface";
import {urls} from "../constants/urls";
import {IPost} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient:HttpClient) { }

  getAll():Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(urls.users.link)
  }

  getUserPosts(id: number):Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(urls.users.byIdPosts(id))
  }
}
