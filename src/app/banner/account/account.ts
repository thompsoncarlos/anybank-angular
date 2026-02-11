import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [CurrencyPipe],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {}
