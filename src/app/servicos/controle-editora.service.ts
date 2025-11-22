import { Injectable } from '@angular/core';
import { Editora } from '../model/editora';

@Injectable() // configurado via providers em AppModule conforme enunciado
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Exemplo A' },
    { codEditora: 2, nome: 'Editora Beta' },
    { codEditora: 3, nome: 'Casa dos Livros' }
  ];

  constructor() {}

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const e = this.editoras.find(ed => ed.codEditora === codEditora);
    return e ? e.nome : '';
  }
}
