import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";



import { VoituresComponent } from './voitures.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoitureItemComponent } from './voiture-list/voiture-item/voiture-item.component';
import { VoituresRoutingModule } from './voitures-routing.module';





@NgModule({
  declarations: [
    VoituresComponent,
    VoitureStartComponent,
    VoitureListComponent,
    VoitureEditComponent,
    VoitureItemComponent,
    VoitureDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    VoituresRoutingModule,
    FormsModule
  ]
})
export class VoituresModule { }
