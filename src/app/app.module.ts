import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



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
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
