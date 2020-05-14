import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Voiture } from "./model/voiture.model";
import { VoituresService } from "./voitures.service";
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class VoitureResolver implements Resolve<Voiture> {


  constructor(private voitureService: VoituresService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Voiture> {

    let id=route.paramMap.get('id');
    if(id!=null){
      return this.voitureService.getVoiture(+id);
    }
    else{
      return null;
    }


  }
}
