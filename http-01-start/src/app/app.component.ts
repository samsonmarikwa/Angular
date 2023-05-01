import { Component, OnDestroy, OnInit } from '@angular/core';

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  subscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.subscription = this.postsService.error.subscribe(
      (error) => (this.error = error)
    );
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (response) => {
        this.loadedPosts = response;
        this.isFetching = false;
      },
      (error) => {
        this.error = error.message;
        this.isFetching = false;
      }
    );
  }

  onCreatePost(postData: Post) {
    this.postsService.createAdStorePosts(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (response) => {
        this.loadedPosts = response;
        this.isFetching = false;
      },
      (error) => {
        this.error = error.message;
        this.isFetching = false;
      }
    );
  }

  onClearPosts() {
    this.postsService.clearPosts().subscribe(() => {
      this.onFetchPosts();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onErrorHandling() {
    this.error = null;
  }
}
