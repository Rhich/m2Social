import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import {Posts} from './posts';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {User} from '../user/user';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: []
})
export class PostsComponent implements OnInit {

  listOfPosts: Posts[];
  user: User = new User();
  constructor(private postsServise: PostsService , private route: ActivatedRoute , private userServies: UserService ) {
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      return this.postsServise.getListofPosts(+params.get('id'));
    }).subscribe(posts => this.listOfPosts = posts);

    this.route.paramMap.switchMap((params: ParamMap) => {
      return this.userServies.getUser(+params.get('id'));
    }).subscribe(user => this.user = user);
    /*this.postsServise.getListofPosts().subscribe(listPosts => this.listOfPosts = listPosts);*/
  }

}
