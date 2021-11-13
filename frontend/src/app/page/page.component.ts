import { Component, OnInit } from '@angular/core';
import { PageChoiceService, PAGE_CHOICE } from '../page-choice.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  page_choice_service: PageChoiceService;

  constructor(page_choice_service: PageChoiceService) {
    this.page_choice_service = page_choice_service;
  }

  getPageType(): PAGE_CHOICE {
    console.log(
      'Getting page choice',
      this.page_choice_service.getPageChoice()
    );
    return this.page_choice_service.getPageChoice();
  }

  PAGE_CHOICE(): typeof PAGE_CHOICE {
    return PAGE_CHOICE;
  }

  ngOnInit(): void {}
}
