import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseGetPostDto } from "./posts.dto";

/*
  Generated class for the PostsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsApiProvider {
  public baseApi = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    console.log('Hello PostsApiProvider Provider');
  }

  getPosts() {
    return this.http.get<ResponseGetPostDto[]>(`${this.baseApi}/posts`);
  }

}
