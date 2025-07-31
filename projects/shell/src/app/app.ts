import { ChangeDetectionStrategy, Component, inject, NgZone, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('shell');
  protected readonly angularVersion = require('../../../../package.json').dependencies['@angular/core'];

}
