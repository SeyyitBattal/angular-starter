import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/routes/routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    {provide: "url", useValue: "https://github.com/SeyyitBattal"}
  ]
}).catch(err => console.error(err));


