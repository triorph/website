import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageChoiceService, PAGE_CHOICE } from '../page-choice.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let pageService: PageChoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provider: PageChoiceService, useValue: new PageChoiceServiceStub() },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    pageService = TestBed.inject(PageChoiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select home page when clicking home page', async () => {
    pageService.setPageChoice(PAGE_CHOICE.RESUME_PAGE);
    expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.RESUME_PAGE);
    let span = fixture.debugElement.nativeElement.querySelector('#Home');
    span.click();

    fixture.whenStable().then(() => {
      expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.HOME_PAGE);
    });
  });
  it('should select resume page when clicking resume', async () => {
    pageService.setPageChoice(PAGE_CHOICE.HOME_PAGE);
    expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.HOME_PAGE);
    let span = fixture.debugElement.nativeElement.querySelector('#Resume');
    span.click();

    fixture.whenStable().then(() => {
      expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.RESUME_PAGE);
    });
  });
  it('should select blog page when clicking blog', async () => {
    pageService.setPageChoice(PAGE_CHOICE.HOME_PAGE);
    expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.HOME_PAGE);
    let span = fixture.debugElement.nativeElement.querySelector('#Blog');
    span.click();

    fixture.whenStable().then(() => {
      expect(pageService.getPageChoice()).toEqual(PAGE_CHOICE.BLOG_POST);
    });
  });
});

class PageChoiceServiceStub {
  choice: PAGE_CHOICE = PAGE_CHOICE.HOME_PAGE;

  getPageChoice(): PAGE_CHOICE {
    return this.choice;
  }
  setPageChioce(choice: PAGE_CHOICE) {
    this.choice = choice;
  }
}
