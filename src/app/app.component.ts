import { Component } from '@angular/core';
import { Root } from './reddit';
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RedditService]
})
export class AppComponent {
  title = 'pauperReddit';
  posts : Root[] = [];

  constructor(private search:RedditService){
    
  }
  searchReddit():void{
    this.search.searchReddit().subscribe(
      (response:Root)=>{
        this.posts.push(response)
      }
    )
  }
}
