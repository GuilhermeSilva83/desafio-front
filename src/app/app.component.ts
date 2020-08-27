import { Component } from '@angular/core';
import { MainMenuComponent } from "./component/infrastructure/main-menu/main-menu.component";
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'teste Guilherem Silva';

  constructor(private service: AuthenticationService) {

  }

  Conectado() {
    return this.service.isLoggedIn();
  }
}
