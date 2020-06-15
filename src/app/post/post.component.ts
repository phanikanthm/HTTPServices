import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
}) 
export class PostComponent implements OnInit {
  posts;
  constructor(private postsService:PostsService) { } 

  ngOnInit() {
  } 

 
  getposts(){

    this.postsService.getposts().subscribe(
        (response) =>{

          this.posts=response;
        }


    )
  }

}
