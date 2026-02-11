import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  currentDate = new Date();
}
