import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageChoiceService } from './page-choice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ResumeComponent } from './page/resume/resume.component';
import { BlogComponent } from './page/blog/blog.component';
import { BlogPostComponent } from './page/blog/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageComponent,
    HomePageComponent,
    ResumeComponent,
    BlogComponent,
    BlogPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [PageChoiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
