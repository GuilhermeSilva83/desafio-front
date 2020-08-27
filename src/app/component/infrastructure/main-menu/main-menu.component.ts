import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }


  Sair() {
    this.service.logout();
    this.router.navigate(['login']);

  }
}
