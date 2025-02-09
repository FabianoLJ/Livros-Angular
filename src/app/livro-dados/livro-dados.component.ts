import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  imports: [FormsModule, CommonModule], 
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro(0, 0, '', '', []);
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

  incluir = (): void => {
    this.livro.codEditora = Number(this.livro.codEditora); 
    this.livro.autores = this.autoresForm.split('\n'); 
    this.servLivros.incluir(this.livro); 
    this.router.navigateByUrl('/lista');
  };
}
