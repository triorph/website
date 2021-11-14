import { Component, OnInit } from '@angular/core';
import { PageChoiceService, PAGE_CHOICE } from '../page-choice.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  constructor(private page_choice_service: PageChoiceService) {}

  getPageType(): PAGE_CHOICE {
    return this.page_choice_service.getPageChoice();
  }

  PAGE_CHOICE(): typeof PAGE_CHOICE {
    return PAGE_CHOICE;
  }

  ngOnInit(): void {}
}
