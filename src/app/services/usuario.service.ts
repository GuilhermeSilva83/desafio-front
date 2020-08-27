import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model';
import { CrudService } from './CrudService';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<Usuario> {
  constructor(protected http: HttpClient) {
    super(http, "api/usuario");
  }
}


