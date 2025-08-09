import { ChangeDetectionStrategy, Component, inject, NgZone, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('shell');
  protected readonly angularVersion = require('../../../../package.json').dependencies['@angular/core'];

  protected readonly sendData = (msg: string) => {
    // Send data through a custom event
    const event = new CustomEvent('shell', { detail: msg });
    window.dispatchEvent(event);
  }

}
