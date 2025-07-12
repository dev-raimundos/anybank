import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-conta',
  imports: [ CurrencyPipe ],
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {

}
