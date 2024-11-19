import { Injectable } from '@angular/core';
import { Livro } from '../app/livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a cabeça: Java',
      resumo: 'Use a cabeça! Java é uma experiência completa de aprendizado',
      autores: ['Bert Bates', 'Kathy Sierra'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro TypeScript',
      resumo: 'Guia avançado de TypeScript',
      autores: ['Thiago da Silva Adriano'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro Web Development',
      resumo: 'Técnicas modernas de desenvolvimento web',
      autores: ['Randy Connolly', 'Ricardo Hoar'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
