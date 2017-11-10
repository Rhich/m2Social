import { Component } from '@angular/core';
import {UserService} from './user/user.service';
import {PostsService} from './posts/posts.service';
import {CommentsService} from './comments/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService, PostsService, CommentsService]
})
export class AppComponent {
  title = 'M2 Social';
}
