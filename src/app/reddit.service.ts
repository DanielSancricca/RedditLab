import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Root} from './reddit'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) { }

  searchReddit():Observable<any>{
    return this.http.get<Root>("https://www.reddit.com/r/aww/.json");
  }


}
