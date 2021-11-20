import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPostsService, BlogPost } from '../../blog-posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogSelection: number | null = null;
  constructor(private blogPostsService: BlogPostsService) {}

  ngOnInit(): void {}
  public getBlogSummaries(): Observable<BlogPost[]> {
    return this.blogPostsService.getBlogPostSummaries();
  }

  public getBlogEntry(): Observable<BlogPost | undefined> | undefined {
    if (this.blogSelection == null) {
      return undefined;
    } else {
      return this.blogPostsService.getBlogPost(this.blogSelection);
    }
  }

  public blogSelect(blogPost: BlogPost) {
    this.blogSelection = blogPost.id;
  }
}
