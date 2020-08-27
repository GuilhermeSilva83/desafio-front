import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login = new Login();
  erro: string = null;


  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    this.login = new Login();
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  submit() {
    this.erro = null;
    this.authService.login(this.login.usuario, this.login.senha).then(result => {

      if (result.success) {
        this.authService.setSession(result.data);
        this.router.navigate(['']);
      }
      else {
        this.erro = result.message;
      }
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
      this.erro = err.message;
    });
  }
}