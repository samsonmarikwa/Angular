import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }
  createAdStorePosts(postData: Post) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty').append('custom-1', 'key-1');
    searchParams = searchParams.append('custom-2', 'key-2');
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-82e67-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          headers: new HttpHeaders({
            'Custom-Header-1': 'Hello',
            'Custom-Header-2': 'Good Morning',
          }),
          params: searchParams,
          observe: 'response'
        }
      )
      .subscribe(
        (response) => {
          console.log(response.body);
          console.log(response.status);
          console.log(response.statusText)
        },
        (error) => this.error.next(error.message)
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-82e67-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((response) => {
          const responseArray: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              responseArray.push({ ...response[key], id: key });
            }
          }
          return responseArray;
        }),
        catchError((errorResponse) => {
          // Send to analytics server
          return throwError(errorResponse);
        })
      );
  }

  clearPosts() {
    return this.http.delete(
      'https://ng-complete-guide-82e67-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events'
      }
    ).pipe(tap(event => {
      console.log(event);
    }));
  }
}
