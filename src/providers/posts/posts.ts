import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from "rxjs";
import { PostsApiProvider } from "../posts-api/posts-api";
import { ResponseGetPostDto } from "../posts-api/posts.dto";

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
  private subscription: Array<Subscription> = [];

  constructor(public http: HttpClient,
              private postApiProvider: PostsApiProvider) {
    console.log('Hello PostsProvider Provider');
  }

  dispose() {
    this.unsubscribe();
  }

  unsubscribe() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  getPosts() {
    return new Promise<ResponseGetPostDto[]>((resolve, reject) => {
      this.subscription.push(
        this.postApiProvider.getPosts()
          .subscribe(result => {
            resolve(result);
          }, error => {
            reject(error);
          })
      );
    })
  }
}
