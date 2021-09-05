# ToDoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Deploy on Google Cloud App Engine

To deploy the To-Do application on App engine follow the below steps:

1. Create a GCP Project or use existing one
2. Create App Engine by selecting a nearest region to you (`Note: region is permanent`)
3. From command line run `npm run build` to build `dist` folder
4. Go to `app.yaml` file and replace `service` with your service name or specify new one it will be created
5. Login to GCP account by using  `gcloud auth login`
6. On successfull login to GCP, from the project folder run `gcloud app deploy --project=<YOUR_GCP_PROJECT_ID>`
7. To view the deployed app engine service, run `gcloud app browse -s <YOUR_SERVICE_NAME>`

## Hosted Server

This project is hosted on github pages. Visit https://nagarjun14.github.io/ page to access online.

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
