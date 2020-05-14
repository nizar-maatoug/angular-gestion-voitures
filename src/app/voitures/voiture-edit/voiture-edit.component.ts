import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Voiture } from '../model/voiture.model';
import { VoituresService } from '../voitures.service';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {

  id:number;
  editMode: boolean;

  couleurs=['Bleu','Rouge', 'Vert', 'Blanche', 'Noire'];
  voiture: Voiture;

  constructor(private voitureService: VoituresService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data)=>{
        this.voiture=data['voiture'];
        this.editMode=this.voiture!=null;
        if(this.voiture==null){
          this.voiture={};
        }
      }
    );


  }


  onAjoutVoiture(formulaire: NgForm){
    if(this.editMode){
      this.voitureService.updateVoiture(this.voiture).subscribe(
        v => this.router.navigate(['voitures',v.id])
      );
    }else{
      this.voitureService.postVoiture(this.voiture).subscribe(
        v => {this.voiture={};formulaire.reset()}
      );
    }

  }

  onCancel(){
    this.router.navigate(["../"],{relativeTo: this.route});
  }



}
