import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {UserComponent} from '../user.component';

const usersRoutes: Routes = [
  {
    path: 'user', component: UserComponent,
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UsersModule { }
