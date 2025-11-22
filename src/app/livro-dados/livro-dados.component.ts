import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro';
import { Editora } from '../model/editora';
import { ControleEditoraService } from '../servicos/controle-editora.service';
import { ControleLivrosService } from '../servicos/controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    // transforma o texto do textarea em vetor de autores (quebra de linha)
    this.livro.autores = this.autoresForm
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    this.servLivros.incluir(this.livro);

    // resetar formulário
    this.livro = new Livro();
    this.autoresForm = '';

    // navegar para lista
    this.router.navigateByUrl('/lista');
  }
}
