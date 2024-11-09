import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly apiUrl = 'https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario';

  constructor(private readonly http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUsuario(email: string, senha: string): Observable<any> {
    if (email.trim() === '' || senha.trim() === '') {
      throw new Error('Email ou senha inválido!');
    }
    return this.http.get(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }

}

