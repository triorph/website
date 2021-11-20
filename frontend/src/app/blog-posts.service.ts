import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
type BlogPost = {
  id: number;
  author: string;
  dateCreated: string;
  text: string;
  title: string;
};

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  data: Map<number, BlogPost>;
  constructor() {
    this.data = new Map<number, BlogPost>();
    [
      {
        id: 1,
        author: 'Michael Walsh',
        dateCreated: Date(),
        text: 'Blog post #1 content',
        title: 'Blog post #1',
      },
      {
        id: 2,
        author: 'Michael Walsh',
        dateCreated: Date(),
        text: 'Blog post #2 content',
        title: 'Blog post #2',
      },
      {
        id: 3,
        author: 'Michael Walsh',
        dateCreated: Date(),
        text: 'Blog post #3 content',
        title: 'Blog post #3',
      },
    ].forEach((datum: BlogPost) => {
      this.insertBlogPost(datum);
    });
  }

  public getBlogPostSummaries(): Observable<BlogPost[]> {
    return of([...this.data.values()]);
  }

  public getBlogPost(id: number): Observable<BlogPost | undefined> {
    return of(this.data.get(id));
  }

  private insertBlogPost(blogPost: BlogPost) {
    this.data.set(blogPost.id, blogPost);
  }
}
export { BlogPost };
