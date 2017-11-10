import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listOfusers: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getListofUsers().subscribe(users => this.listOfusers = users );
  }

}
