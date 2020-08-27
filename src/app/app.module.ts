// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import '@angular/common/locales/global/pt';

// Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

// terceiros
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxCurrencyModule, CurrencyMaskInputMode } from "ngx-currency";

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};


import { ToastrModule } from 'ngx-toastr';

// app, route
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// app - components
import { MainMenuComponent } from './component/infrastructure/main-menu/main-menu.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { ListaLeilaoComponent } from './component/lista/lista-leilao/lista-leilao.component';
import { LeilaoComponent } from './component/detalhe/leilao/leilao.component';

// app - interceptor
import { AuthInterceptor } from './infra/auth.interceptor';


const maskConfig: Partial<IConfig> = {
  validation: false,
};



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainComponent,
    LoginComponent,
    ListaLeilaoComponent,
    LeilaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
