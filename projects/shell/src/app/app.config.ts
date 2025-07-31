import { ApplicationConfig, inject, NgZone, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withComponentInputBinding()
    ),
    provideAppInitializer(()=> {
      const ngZone = inject(NgZone);
      (globalThis['ngZone' as keyof typeof globalThis] as any) = ngZone;
    })
  ]
};
