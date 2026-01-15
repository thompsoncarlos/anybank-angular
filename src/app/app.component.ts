import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from './form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from "./extrato/extrato.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((saldoAtual, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return saldoAtual + transacao.valor;
        case TipoTransacao.SAQUE:
          return saldoAtual - transacao.valor;
        default:
          throw new Error('Tipo de transação inválido');
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
