import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './component/infrastructure/main-menu/main-menu.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardService } from './infra/auth-guard.service';
import { ListaLeilaoComponent } from './component/lista/lista-leilao/lista-leilao.component';
import { LeilaoComponent } from './component/detalhe/leilao/leilao.component';


const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, },
  { path: 'leilao', component: ListaLeilaoComponent, canActivate: [AuthGuardService] },
  { path: 'leilao/:id', component: LeilaoComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
