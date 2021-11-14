import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { PageChoiceService, PAGE_CHOICE } from '../page-choice.service';

describe('PageComponent', () => {
  let component: PageComponent;
  let pageService: PageChoiceService;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageComponent,
        HomePageStubComponent,
        ResumePageStubComponent,
        BlogPageStubComponent,
      ],
      providers: [
        { provide: PageChoiceService, useValue: new PageChoiceServiceStub() },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    pageService = TestBed.inject(PageChoiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a home page component when choice is home', () => {
    pageService.setPageChoice(PAGE_CHOICE.HOME_PAGE);
    fixture.detectChanges();
    expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.HOME_PAGE);
    const pageElement: HTMLElement = fixture.nativeElement;
    const homeComponent = pageElement.querySelector('app-home-page');
    expect(homeComponent).toBeTruthy();
    const resumeComponent = pageElement.querySelector('app-resume');
    expect(resumeComponent).toBeNull();
    const blogComponent = pageElement.querySelector('app-blog');
    expect(blogComponent).toBeNull();
  });

  it('shows a resume page component when choice is resume', () => {
    pageService.setPageChoice(PAGE_CHOICE.RESUME_PAGE);
    fixture.detectChanges();
    expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.RESUME_PAGE);
    const pageElement: HTMLElement = fixture.nativeElement;
    const homeComponent = pageElement.querySelector('app-home-page');
    expect(homeComponent).toBeNull();
    const resumeComponent = pageElement.querySelector('app-resume');
    expect(resumeComponent).toBeTruthy();
    const blogComponent = pageElement.querySelector('app-blog');
    expect(blogComponent).toBeNull();
  });

  it('shows a blog page component when choice is blog', () => {
    pageService.setPageChoice(PAGE_CHOICE.BLOG_POST);
    fixture.detectChanges();
    expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.BLOG_POST);
    const pageElement: HTMLElement = fixture.nativeElement;
    const homeComponent = pageElement.querySelector('app-home-page');
    expect(homeComponent).toBeNull();
    const resumeComponent = pageElement.querySelector('app-resume');
    expect(resumeComponent).toBeNull();
    const blogComponent = pageElement.querySelector('app-blog');
    expect(blogComponent).toBeTruthy();
  });
});

class PageChoiceServiceStub {
  choice: PAGE_CHOICE;
  constructor() {
    this.choice = PAGE_CHOICE.HOME_PAGE;
  }
  getPageChoice(): PAGE_CHOICE {
    return this.choice;
  }
  setPageChoice(choice: PAGE_CHOICE) {
    this.choice = choice;
  }
}

@Component({ selector: 'app-home-page', template: '' })
class HomePageStubComponent {}

@Component({ selector: 'app-resume', template: '' })
class ResumePageStubComponent {}

@Component({ selector: 'app-blog', template: '' })
class BlogPageStubComponent {}
