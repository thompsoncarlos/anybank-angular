import { Component, output } from '@angular/core';
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

  createdTransaction = output();

  onSubmit() {
    this.createdTransaction.emit();
    this.reset();
  }

  reset() {
    this.transactionType = '';
    this.valueTransaction = '';
  }
}
