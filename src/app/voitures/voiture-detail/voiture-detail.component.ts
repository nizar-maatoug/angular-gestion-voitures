import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoituresService } from '../voitures.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent implements OnInit {

  voiture : Voiture;

  isLogged: boolean;

  constructor(private voitureService: VoituresService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {

    /* this.route.params.pipe(
      switchMap((params:Params) =>this.voitureService.getVoiture(+params['id']))
    )
    .subscribe(v=>this.voiture=v); */

    this.route.data.subscribe(
      (data)=>this.voiture=data['voiture']
    );

    this.authService.jeton.subscribe(
      jeton => this.isLogged=!!jeton
    );
  }


  onSupprimer(){
    console.log(this.voiture.id);
    this.voitureService.deleteVoiture(this.voiture).subscribe(
      () => this.router.navigate(['../'],{relativeTo: this.route})
    )
  }

  onEditVoiture(id:number){
    this.router.navigate(['../edit',id],{relativeTo:this.route});
  }

}
