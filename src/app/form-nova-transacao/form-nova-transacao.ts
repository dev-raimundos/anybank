import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [ FormsModule ], // Ao importar remove todas as validações de formulário nativa do HTML.
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css'
})

export class FormNovaTransacao {
  valorTransacao: string = "";
  tipoTransacao: string = "";

  transacaoCriada = output();

  aoSubmeter() {
    this.transacaoCriada.emit();

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
