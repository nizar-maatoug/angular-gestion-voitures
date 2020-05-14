import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VoituresComponent } from './voitures/voitures.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes=[
  {path: '', redirectTo: 'voitures', pathMatch:'full'},
  {path:'login', component:AuthComponent},
  {path: '**', component: PageNotFoundComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
