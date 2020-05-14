import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { VoituresComponent } from './voitures.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureResolver } from "./voiture.resolver";
import { AuthGard } from '../auth/auth-gard.service';


const VoituresRoutes: Routes=[
  {
    path:'voitures',
    component:VoituresComponent,
    children:[
      {
        path: '',
        component: VoitureStartComponent
      },
      {
        path: 'new',
        canActivate: [AuthGard],
        component: VoitureEditComponent
      },
      {
        path: ':id',
        component: VoitureDetailComponent,
        resolve:{
          voiture: VoitureResolver
        }
      },
      {
        path: 'edit/:id',
        canActivate:[AuthGard],
        component: VoitureEditComponent,
        resolve:{
          voiture: VoitureResolver
        }
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(VoituresRoutes)
  ],
  exports: [RouterModule]
})
export class VoituresRoutingModule { }
