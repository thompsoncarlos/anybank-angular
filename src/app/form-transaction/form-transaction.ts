import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-transaction',
  imports: [FormsModule],
  templateUrl: './form-transaction.html',
  styleUrl: './form-transaction.css',
})
export class FormTransaction {
  valueTransaction = '';
  transactionType = '';

  onSubmit() {
    console.log(this.transactionType);
    console.log(this.valueTransaction);
  }
}
