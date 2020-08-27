import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import * as moment from "moment";
import { JwtHelperService } from '@auth0/angular-jwt';
import { JsonPipe } from '@angular/common';
import { decode } from 'punycode';
import { Observable } from 'rxjs';
import { RtlScrollAxisType } from '@angular/cdk/platform';
import { OperationResult } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  helper = new JwtHelperService();
  constructor(private http: HttpClient) {
  }

  login(apelido: string, senha: string) {
    var url = `${environment.membershipApiUrl}api/usuario/login`;
    return this.http.post<OperationResult<string>>(url, { apelido, senha }).toPromise();
  }

  setSession(data) {
    console.log("setSession();")
    var date = this.helper.getTokenExpirationDate(data);
    const expiresAt = moment(date).add('second');

    localStorage.setItem('id_token', data);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }


  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }


  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


}



 //   return this.http.post<any>(`${environment.membershipApiUrl}/usuario/login`, { apelido, senha })
// 