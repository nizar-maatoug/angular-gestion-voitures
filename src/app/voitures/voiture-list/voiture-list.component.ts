import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';

import { Voiture } from '../model/voiture.model';
import { VoituresService } from '../voitures.service';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit, OnDestroy {

  islogedd:boolean;

  voitures:Voiture[]=[];

  voituresChangeSubscription : Subscription

  constructor(private voitureService: VoituresService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {

    this.voituresChangeSubscription = this.voitureService.voitureChanged.subscribe(
      (voitures :Voiture[]) => {
        this.voitures=voitures
      }
    );
    this.voitureService.getVoitures().subscribe(v =>{
      this.voitures=v;
    });

    this.authService.jeton.subscribe(
      jeton => this.islogedd=!!jeton
    )




  }

  onNewVoiture(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnDestroy(){
    this.voituresChangeSubscription.unsubscribe();
  }


}
