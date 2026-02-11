import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Welcome } from "./welcome/welcome";
import { Account } from "./account/account";

@Component({
  selector: 'app-banner',
  imports: [Welcome, Account],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {


}
