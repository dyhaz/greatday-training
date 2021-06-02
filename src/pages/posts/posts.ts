import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsApiProvider } from "../../providers/posts-api/posts-api";
import { Subscription } from "rxjs";
import { PostsProvider } from "../../providers/posts/posts";
import { ResponseGetPostDto } from "../../providers/posts-api/posts.dto";

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  postsList: ResponseGetPostDto[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private postProvider: PostsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  async getPosts() {
    try {
      this.postsList = await this.postProvider.getPosts();
    } catch (error) {
      console.log(error);
    }
  }
}
