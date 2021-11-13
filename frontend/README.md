# PersonalWebsite

WIP for this project.

Have a navbar that allows selecting home-page (currently the default angular starter page), resume (super incomplete) and blog (nothing).

Although I could dive in at this point and create a Blog Service that allows the blogs to work, then spend some time tidying up the
content and CSS of the actual pages, I think my main focus should be getting the unit tests working for what I do have, and then try
to do the blog post service as a test driven development.

### Rough next steps are

- Write unit tests for page selector, page, navbar.
- Add in some e2e tests
- Using TDD write a blog post service (with hard-coded data at first)
- Add in the blog page, with the ability to see all posts in a row or 1 blog post.
- Add in pagination on the blog post page.
- Using TDD extend the blog post service to retrieve the blogs from AWS lambdas.

# Original Angulra info below

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
