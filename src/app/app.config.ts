import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideAuth0} from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-thrn8sdd7j0od3g0.us.auth0.com',
      clientId: 'i4FgX5yiU8nQJeuqDTXsVdJKnY6WkUJG',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
