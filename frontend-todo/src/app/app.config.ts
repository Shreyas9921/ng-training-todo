import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
  