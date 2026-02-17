import { Component, signal } from '@angular/core';

import { Banner } from './banner/banner';
import { FormTransaction } from "./form-transaction/form-transaction";

@Component({
  selector: 'app-root',
  imports: [Banner, FormTransaction],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anybank-angular');
}
