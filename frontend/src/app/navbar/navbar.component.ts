import { Component, OnInit } from '@angular/core';
import { PageChoiceService } from '../page-choice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: Array<string>;
  pageChoiceService: PageChoiceService;

  constructor(pageChoiceService: PageChoiceService) {
    this.items = ['Home', 'Resume', 'Blog'];
    this.pageChoiceService = pageChoiceService;
  }

  navSelect(i: number) {
    this.pageChoiceService.setPageChoice(i);
  }

  ngOnInit(): void {}
}
