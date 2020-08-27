import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CrudService } from './CrudService';
import { Leilao } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LeilaoService extends CrudService<Leilao>{

  constructor(protected http: HttpClient) {
    super(http, "api/leilao");
  }
}
