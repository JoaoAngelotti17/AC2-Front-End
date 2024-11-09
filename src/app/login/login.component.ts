import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService) { }

  onSubmit(): void {
    if (!this.user.email || !this.user.password) {
      alert('Email and password are required.');
      return;
    }
    this.usuarioService.getUsuario(this.user.email, this.user.password)
      .subscribe({
        next: (usuario) => window.location.href = '/principal',
        error: (error) => alert('Erro: ' + error.statusText)
      });
  }
}

