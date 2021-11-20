import { Injectable } from '@angular/core';
class BlogPost {
    author: string,
    dateCreated: Date,
    text: string
}

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  constructor() { }
}
