import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  template: `
    <div class="corpo-nav-bar">
      <a href="#"><img [src]="iconPaths.home" alt="Ícone Home" class="nav-icon"> Home</a>
      <a href="#"><img [src]="iconPaths.notificacao" alt="Ícone Notificações" class="nav-icon"> Notificações</a>
      <a href="#"><img [src]="iconPaths.materias" alt="Ícone Matérias" class="nav-icon"> Matérias</a>
      <a href="#"><img [src]="iconPaths.valores" alt="Ícone Valores" class="nav-icon"> Valores</a>
      <a href="#"><img [src]="iconPaths.sair" alt="Ícone Sair" class="nav-icon"> Sair</a>
    </div>
  `
})
export class Navbar {
  iconPaths = {
    home: '/botao-home.png',
    notificacao: '/notificacao.png',
    materias: '/livro.png',
    valores: '/estrela.png',
    sair: '/assinar-em.png',
  };
}
