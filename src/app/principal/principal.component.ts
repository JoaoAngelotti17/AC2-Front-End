import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  nomeFiltro: string = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void { this.usuarioService.getUsuarios().subscribe(dados => [this.usuarios, this.usuariosFiltrados] = [dados, dados]); }

  filtrarUsuarios(): void {
    console.log(this.usuariosFiltrados);

    const nomeFiltroLower = this.nomeFiltro ? this.nomeFiltro.toLowerCase().trim() : '';
    if (nomeFiltroLower) {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.nome && usuario.nome.toLowerCase().includes(nomeFiltroLower)
      );
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
  }
}


