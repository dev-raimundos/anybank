import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [ FormsModule ], // Ao importar remove todas as validações de formulário nativa do HTML.
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css'
})

export class FormNovaTransacao {
  valorTransacao: string = "";
  tipoTransacao: string = "";

  transacaoCriada = output<Transacao>();// Tipando o retorno de output como um objeto

  aoSubmeter() {

    const transacao = new Transacao(
      // 'as' serve para informar que com certeza a variável emitida é do tipo exigido.
      this.tipoTransacao as TipoTransacao,
      // 'Number()' é a função que converte o valor recebido para o tipo exigido.
      Number(this.valorTransacao)
    )

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
