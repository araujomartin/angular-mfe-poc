import { Component, signal } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mfe-1');
  protected readonly angularVersion = require('../../../../package.json').dependencies['@angular/core'];
}
