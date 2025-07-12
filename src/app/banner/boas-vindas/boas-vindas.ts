import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-boas-vindas',
  imports: [
    DatePipe
  ],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.css'
})
export class BoasVindas {
  dataAtual = new Date();
}
