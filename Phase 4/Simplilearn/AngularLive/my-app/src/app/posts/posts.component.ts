import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostData } from './postdata.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // console.log(postData);
    this.http
      .post(
        'https://ng-httpapi-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http
      .get('https://ng-httpapi-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const postArray: PostData[] = [];
          for (const key in responseData) {
            postArray.push({ ...responseData[key], id: key });
          }
          return postArray;
        })
      )
      .subscribe((posts) => {
        this.loadedPosts = posts;
      });
  }

  onClearPosts() {
    this.http
      .delete('https://ng-httpapi-default-rtdb.firebaseio.com/posts.json')
      .subscribe(() => {
        this.loadedPosts = [];
      });
  }
}
