import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostsService} from './posts/posts.service';
import {MatCardModule, MatListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PostsComponent} from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'users', component: UserComponent
  },
  {
    path: 'users/:id/posts', component: PostsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
