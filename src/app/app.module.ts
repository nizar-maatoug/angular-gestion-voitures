import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {SharedModule} from './shared/shared.module';

import { AuthModule } from "./auth/auth.module";
import { VoituresModule } from "./voitures/voitures.module";

import { AuthInterceptor } from "./auth/auth-interceptor.service";



import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    VoituresModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true

    }
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
