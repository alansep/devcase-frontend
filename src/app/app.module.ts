import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RotasModule } from './devcase/core/roteamento/rotas.module';
import { VsmNavbarModule } from './devcase/core/componentes/vsm-navbar/vsm-navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './devcase/core/roteamento/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RotasModule,
    VsmNavbarModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthGuard, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
