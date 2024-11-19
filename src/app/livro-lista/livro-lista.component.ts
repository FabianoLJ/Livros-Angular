import { Component, OnInit, Inject } from '@angular/core';
import { ControleEditoraService } from '../../app/controle-editora.service'
import { ControleLivrosService } from '../../app/controle-livros.service';
import { Editora } from '../../app/editora';
import { Livro } from '../../app/livro';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-livro-lista',
  standalone: true, 
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  imports: [CommonModule], 
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    @Inject(ControleEditoraService) private servEditora: ControleEditoraService,
    @Inject(ControleLivrosService) private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
   
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => {
    
    return this.servEditora.getNomeEditora(codEditora);
  };
}
