import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.interface';
import { Post } from 'src/app/models/post.interface';
import * as $ from 'jquery';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts: Post[];
  public users: User[];
  public user: User;
  public name: string;
  public desc: string;
  constructor(private http: HttpClient) {
    this.GetPost();
    this.GetUsers();
  }

  ngOnInit() {}
  GetPost() {
    this.http
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe(
        result => {
          this.posts = result;
        },
        error => console.log(error)
      );
  }
  GetUsers() {
    this.http
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe(
        result => {
          this.users = result;
        },
        error => console.log(error)
      );
  }
  getUser(post, namespec, desc) {
    this.http
      .get<User>(`https://jsonplaceholder.typicode.com/users?id=${post.userId}`)
      .pipe()
      .subscribe(
        result => {
          this.name = result[0].name;
          namespec = this.name;
        },
        error => console.log(error)
      );
  }
}
