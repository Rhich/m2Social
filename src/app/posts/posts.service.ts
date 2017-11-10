import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Posts} from './posts';
import 'rxjs/add/operator/retry';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getListofPosts(id: number): Observable<Posts[]> {
    return this.http.get<Posts[]>(`api/users/${id}/posts`).retry(3);
  }

}
