import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css',
})
export class FormNovaTransacaoComponent {
  tipoTransacao: string = '';
  valorTransacao: number = 0;

  transacaoCriada = output<Transacao>();
  tipoTransacaoEnum = TipoTransacao;

  aoSubmeter() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      this.valorTransacao
    );
    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = '';
    this.valorTransacao = 0;
  }
}
