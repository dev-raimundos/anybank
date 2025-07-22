import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css'
})

export class FormNovaTransacao {
  valorTransacao: number = 30;
  tipoTransacao: string = "saque"

  aoSubmeter() {
    console.log(this.valorTransacao);
  }
}
