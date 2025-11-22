import { Injectable } from '@angular/core';
import { Livro } from '../model/livro';

@Injectable() // configurado via providers em AppModule conforme enunciado
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Introdução ao Angular',
      resumo: 'Noções básicas e práticas iniciais.',
      autores: ['Ana Silva', 'João Souza']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript na Prática',
      resumo: 'Aprendendo TypeScript para aplicações modernas.',
      autores: ['Carlos Pereira']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Design de Interfaces',
      resumo: 'Princípios de UI/UX e layout responsivo.',
      autores: ['Mariana Costa', 'Pedro Lima']
    }
  ];

  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.reduce((acc, cur) => Math.max(acc, cur.codigo), 0);
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const idx = this.livros.findIndex(l => l.codigo === codigo);
    if (idx >= 0) {
      this.livros.splice(idx, 1);
    }
  }
}
