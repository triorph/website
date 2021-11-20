import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../../blog-posts.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  @Input() blogPost: BlogPost = {
    title: '',
    dateCreated: '',
    author: '',
    id: 0,
    text: '',
  };

  ngOnInit(): void {}
}
