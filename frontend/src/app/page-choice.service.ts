import { Injectable } from '@angular/core';

enum PAGE_CHOICE {
  HOME_PAGE,
  RESUME_PAGE,
  BLOG_POST,
}
@Injectable({
  providedIn: 'root',
})
export class PageChoiceService {
  page_choice: PAGE_CHOICE = PAGE_CHOICE.BLOG_POST;
  constructor() {}

  public setPageChoice(choice: PAGE_CHOICE) {
    this.page_choice = choice;
  }

  public getPageChoice(): PAGE_CHOICE {
    return this.page_choice;
  }
}

export { PAGE_CHOICE };
